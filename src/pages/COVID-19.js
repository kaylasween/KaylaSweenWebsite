import React from 'react'

import Layout from '../components/Layout'
import CovidMsDayToDay from '../components/data/covidMsDayToDay'

import { dataset } from '../constants/covidData'

const covid19 = (props) => {

  return (
    <Layout>
      <h1>COVID-19 Data for Mississippi</h1>
      <h2>New Cases of COVID-19 Per Day</h2>
      <CovidMsDayToDay data={dataset} />
      <small>This data is collected from <a href="https://msdh.ms.gov/msdhsite/_static/14,0,420.html">the Mississippi Department of Health's COVID-19 informational page</a>.</small>
    </Layout>
  )
}

export default covid19