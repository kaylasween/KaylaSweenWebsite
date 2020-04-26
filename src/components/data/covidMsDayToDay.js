import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import '../../styles/components/_covid.scss'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const covidMsDayToDay = ({ data /* see data tab */ }) => {
  return (
    <div className="covid-chart">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 60, bottom: 80, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "hour",
          useUTC: false
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 50,
          format: "%b %d",
          tickValues: "every 7 days",
          legend: 'Dates (from first known case in Mississippi)',
          legendOffset: 75,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Cases Per Day',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'paired' }}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        areaBaselineValue={30}
        areaOpacity={0.5}
        useMesh={true}
      />
    </div>
  )
}

export default covidMsDayToDay