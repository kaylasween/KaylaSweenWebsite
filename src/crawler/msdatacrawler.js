const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const data = require('../constants/covidData.json')

const msdh = 'https://msdh.ms.gov/msdhsite/_static/14,0,420.html'

const getDailyCases = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let dailyCases = 0

    $('[data-description="New cases"]').each((_idx, el) => {
      dailyCases = $(el).text()
    });

    return dailyCases
  } catch (error) {
    throw error;
  }
}

const getTotalCases = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let total = 0

    $('[data-description="Total MS cases"]').each((_idx, el) => {
      total = $(el).text()
    });

    return total
  } catch (error) {
    throw error;
  }
}

const getDailyDeaths = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let deaths = 0

    $('[data-description="New deaths"]').each((_idx, el) => {
      deaths = $(el).text()
    });

    return deaths
  } catch (error) {
    throw error;
  }
}

const getTestsRun = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let tests = 0

    $('[data-description="Total tests PCR"]').each((_idx, el) => {
      tests = $(el).text()
    });

    return tests
  } catch (error) {
    throw error;
  }
}

let today = new Date()
let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)
let daily = {
  date: today.getFullYear() + '-' + month + '-' + (day - 1),
  newCases: 0,
  newDeaths: 0,
  totalCases: 0,
  testsRun: 0
}

getDailyDeaths()
  .then((dailyDeaths) => daily.newDeaths = dailyDeaths)
getTestsRun()
  .then((tests) => daily.testsRun = tests)
getDailyCases()
  .then((dailyCases) => daily.newCases = dailyCases)
getTotalCases()
  .then((total) => daily.totalCases = total)

if (!data.data.includes(daily.date) && daily.newCases != 0) {
  data.data.push(daily)

  fs.writeFile('src/constants/covidData.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  })
}
