const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const data = require('../src/constants/covidData.json')

const msdh = 'https://msdh.ms.gov/msdhsite/_static/14,0,420.html'

const getDailyCases = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let dailyCases = parseInt($('[data-description="New cases"]').text().replace(/,/g, ''))

    return dailyCases
  } catch (error) {
    throw error;
  }
}

const getTotalCases = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let total = parseInt($('[data-description="Total MS cases"]').text().replace(/,/g, ''))

    return total
  } catch (error) {
    throw error;
  }
}

const getDailyDeaths = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let deaths = parseInt($('[data-description="New deaths"]').text().replace(/,/g, ''))

    return deaths
  } catch (error) {
    throw error;
  }
}

const getTestsRun = async () => {
  try {
    const { data } = await axios.get(msdh)
    const $ = cheerio.load(data);
    let tests = parseInt($('[data-description="Total tests PCR"]').text().replace(/,/g, ''))

    return tests
  } catch (error) {
    throw error;
  }
}

let today = new Date()
//for correct date formatting
let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)
let daily = {
  date: today.getFullYear() + '-' + month + '-' + (day - 1), //subtracting one from day because this will always be data from the previous day
  newCases: 0,
  newDeaths: 0,
  totalCases: 0,
  testsRun: 0
}

const getCovidData = async () => {
  await getDailyDeaths().then((dailyDeaths) => daily.newDeaths = dailyDeaths)
  await getTestsRun().then((tests) => daily.testsRun = tests)
  await getDailyCases().then((dailyCases) => daily.newCases = dailyCases)
  await getTotalCases().then((total) => daily.totalCases = total)

  if (!data.data.includes(daily.date) && daily.newCases != 0) {
    data.data.push(daily)

    fs.writeFile('src/constants/covidData.json', JSON.stringify(data), (err) => {
      if (err) throw err;
    })
  }
}

getCovidData()
