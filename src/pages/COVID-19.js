import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'
import CovidMsDayToDay from '../components/data/covidMsDayToDay'
import CovidMsMovingAvg from '../components/data/covidMsMovingAvg'
import CovidMsPercentPositive from '../components/data/covidMsPercentPositive'

import { covidCasesPerDay, movingAvg, percentPositive } from '../constants/covidData'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const covid19 = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>COVID-19 Data | Kayla Sween</title>
      </Helmet>
      <h1>COVID-19 Data for Mississippi</h1>
      <h2 className="pad-top">New Cases of COVID-19 Per Day (Moving Average)</h2>
      <CovidMsMovingAvg data={movingAvg} />
      {/* <h2>Positivity Rate</h2>
      <p>Positivity rate for {percentPositive[0].data[percentPositive[0].data.length - 1].x} is: {percentPositive[0].data[percentPositive[0].data.length - 1].y.toFixed(2)}%</p>
      <CovidMsPercentPositive data={percentPositive} />
      <small>This is the percentage of positive cases day-to-day. This takes the total number of cases each day and divides it by the number of tests (swabs, not antibody tests) run.</small>
      <p><small>According to <a href="https://coronavirus.jhu.edu/testing/testing-positivity">Johns Hopkins Coronavirus Resource Center</a>, the recommended positivity rate (percentage of positive cases out of total tests ran) is 5% or below.</small></p> */}
      <h2>New Cases of COVID-19 Per Day</h2>
      <CovidMsDayToDay data={covidCasesPerDay} />
      <small>This data is collected from <a href="https://msdh.ms.gov/msdhsite/_static/14,0,420.html">the Mississippi Department of Health's COVID-19 informational page</a>. Data refreshes automatically at 20:00 UTC (<a href="https://time.is/UTC"><span className="visually-hidden">What is UTC?</span><FontAwesomeIcon icon={faQuestionCircle} /></a>). This website (<a href="https://kaylasween.com">kaylasween.com</a>) and I (Kayla Sween) are in no way affiliated with the Mississippi Department of Health. In no way is this data intended to replace what the Mississippi Department of Health's or the CDC's recommendations. Please follow your local government and public health officials guidance for information on what you should do for your health and the health of others during this pandemic.</small>
      <p><small>Note that a sudden downturn in new cases per day does not indicate a downward trend.</small></p>
      {/* <p><small>Data from June 10, 2020 was not available until June 12, 2020.</small></p> */}
      {/* <p><small>Data from June 17 - June 21, 2020 was not available until June 22, 2020. The total cases from those dates are 1,646 new cases. These were spread out across the 5 days of missing data to avoid spikes in the moving average.</small></p> */}
    </Layout>
  )
}

export default covid19