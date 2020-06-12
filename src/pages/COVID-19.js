import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import CovidMsDayToDay from '../components/data/covidMsDayToDay'
import CovidMsMovingAvg from '../components/data/covidMsMovingAvg'

import { dataset, movingAvg } from '../constants/covidData'

const covid19 = (props) => (
  <Layout>
    <Helmet>
      <title>COVID-19 Data | Kayla Sween</title>
    </Helmet>
    <h1>COVID-19 Data for Mississippi</h1>
    <h2 className="pad-top">New Cases of COVID-19 Per Day (Moving Average)</h2>
    <CovidMsMovingAvg data={movingAvg} />
    <h2>New Cases of COVID-19 Per Day</h2>
    <CovidMsDayToDay data={dataset} />
    <small>This data is collected from <a href="https://msdh.ms.gov/msdhsite/_static/14,0,420.html">the Mississippi Department of Health's COVID-19 informational page</a>.</small>
    <p><small>Note that a sudden downturn in new cases per day does not indicate a downward trend.</small></p>
    <p><small>Data from June 10, 2020 was not available until June 12, 2020.</small></p>
  </Layout>
)

export default covid19