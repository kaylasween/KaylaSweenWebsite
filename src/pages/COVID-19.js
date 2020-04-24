import React from 'react'
import * as d3 from 'd3'

import Layout from '../components/Layout'
import data from '../data/COVID-data.csv'

const covid19 = (props) => {

  // set the dimensions and margins of the graph
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom

  let svg = d3.select('#covidMsDayToDay').append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")")

  d3.csv({ data }, (data) => {
    return {
      date: d3.timeParse("%m/%d/%Y")(data.date),
      totalCases: data.totalCases,
      newCases: data.newCases,
      tests: data.tests
    }
  })

  return (
    <Layout>
      <div id="covidMsDayToDay"></div>
    </Layout>
  )
}

export default covid19