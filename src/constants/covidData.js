import { data } from './covidData.json'

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

export let covidCasesPerDay = [{
  id: "covidMsDayToDay",
  color: "#86D6C2",
  data: dailyCases
}]
