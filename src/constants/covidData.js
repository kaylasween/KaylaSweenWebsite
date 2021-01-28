import { data } from './covidData.json'

console.log(data)

const dataset = data

export let movingAvg = [{
  id: "movingAvg",
  color: "#ffffff",
  data: []
}]

for (let counter = dataset.length - 30; counter < dataset.length; counter++) {
  let avg = (dataset[counter].newCases + dataset[counter - 1].newCases + dataset[counter - 2].newCases + dataset[counter - 3].newCases + dataset[counter - 4].newCases + dataset[counter - 5].newCases + dataset[counter - 6].newCases) / 7
  movingAvg[0].data.push({ x: dataset[counter].date, y: avg })
}

let totalDeaths = 0

for (let counter = 0; counter < dataset.length; counter++) {
  totalDeaths += dataset[counter].newDeaths
}

let dailyCases = dataset.slice(dataset.length - 30, dataset.length).map(point => {
  point = {
    x: point.date,
    y: point.newCases
  }
  return point
})

// dailyCases = dailyCases.slice[dailyCases.length - 30, dailyCases.length]
console.log(dailyCases)

export let covidCasesPerDay = [{
  id: "covidMsDayToDay",
  color: "#86D6C2",
  data: dailyCases
}]

let filterDatesBeforeApril28 = dataset.slice(dataset.length - 30, dataset.length)

let positivityPercentagePerDay = filterDatesBeforeApril28.map(point => {
  point = {
    x: point.date,
    y: (point.totalCases / point.testsRun) * 100
  }
  return point
})

export let percentPositive = [{
  id: "percentPositive",
  color: "#86D6C2",
  data: positivityPercentagePerDay
}]

console.log(percentPositive)