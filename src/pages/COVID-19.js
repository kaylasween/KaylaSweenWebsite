import React from 'react'
import * as d3 from 'd3'

import Layout from '../components/Layout'
import data from '../data/COVID-data.csv'

const covid19 = (props) => {

  // set the dimensions and margins of the graph
  let margin = { top: 10, right: 30, bottom: 30, left: 60 }
  let width = 460 - margin.left - margin.right
  let height = 400 - margin.top - margin.bottom

  let svg = d3.select('#covidMsDayToDay').append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")")

  d3.csv(data, (data) => {
    console.log(data)
    return {
      date: d3.timeParse("%m/%d/%Y")(data.date),
      totalCases: data.totalCases,
      newCases: data.newCases,
      tests: data.tests
    }
  }, (data) => {
    let x = d3.scaleTime().domain(d3.extent(data, (d) => d.date)).range([0, width])
    svg.append("g").attr("transform", "translate(0, " + height + ")").call(d3.axisBottom(x))

    let y = d3.scaleLinear().domain([0, d3.max(data, (d) => +d.newCases)]).range([height, 0])
    svg.append("g").call(d3.axisLeft(y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line().x((d) => x(d.date)).y((d) => y(d.newCases)))
  })

  return (
    <Layout>
      <h1>COVID-19 Data for Mississippi</h1>
      <h2>New Cases of COVID-19 Per Day</h2>
      <div id="covidMsDayToDay"></div>
    </Layout>
  )
}

export default covid19