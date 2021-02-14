const axios = require('axios')
// This is ultimately a personal choice. The '$' below drives me nuts
// So, the result of cheerioAPI.load is 'cheerio' instead of `$`;
const cheerioApi = require('cheerio')
const fs = require('fs')
const data = require('../src/constants/covidData.json')

const msdh = 'https://msdh.ms.gov/msdhsite/_static/14,0,420.html'

// To Assists with Enumeration
// And Object Assign for `daily` data.
const DataPonits = {
  newCases: 'New cases',
  totalCases: 'Total MS cases',
  newDeaths: 'New deaths',
  testsRun: 'Total tests PCR',
};

const cheeriax = (dataPoint) => {
  let result = null;
  return async () => {
    try {
      const response = await axios.get(msdh);
      const cheerio = cheerioApi.load(response.data);

      result = parseInt(cheerio(`[data-description="${dataPoint}"]`).text().replace(/,/g, ''));
    } catch (error) {
      // Consider Logging Error to file
      throw error;
    } finally {
      return result;
    }
  };
};

const getDailyCases = cheeriax(DataPonits.newCases);
const getTotalCases = cheeriax(DataPonits.totalCases);
const getDailyDeaths = cheeriax(DataPonits.newDeaths);
const getTestsRun = cheeriax(DataPonits.testsRun);

let today = new Date()
today.setDate(today.getDate() - 1) //subtracting one from day because this will always be data from the previous day

//for correct date formatting
let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()
let month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)

// Spread our Data Point Object into our Daily Results
// The Values will be overwritten with the result of calling cheeriax
// No need to worry that the values are currently strings
const daily = { date: `${today.getFullYear()}-${month}-${day}`, ...DataPonits };

const getCovidData = async () => {
  await getDailyDeaths().then((dailyDeaths) => daily.newDeaths = dailyDeaths)
  await getTestsRun().then((tests) => daily.testsRun = tests)
  await getDailyCases().then((dailyCases) => daily.newCases = dailyCases)
  await getTotalCases().then((total) => daily.totalCases = total)

  // await getDailyDeaths().then((dailyDeaths) => (daily.newDeaths = dailyDeaths || 0));
  // await getTestsRun().then((tests) => (daily.testsRun = tests || 0));
  // await getDailyCases().then((dailyCases) => (daily.newCases = dailyCases || 0));
  // await getTotalCases().then((total) => (daily.totalCases = total || 0));
  
  // NewCases will either exist as a number or not at all.
  // daily.newCases will be the result of cheeriax => null(falsy) | NaN(falsy) | number
  // If concerned, replace your awaits with the commented awaits above
  if (!data.data.includes(daily.date) && daily.newCases) { 
    data.data.push(daily)

    fs.writeFile('src/constants/covidData.json', JSON.stringify(data), (err) => {
      if (err) throw err;
    })
  }
}

getCovidData()
