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
    </Layout>
  )
}

export default covid19