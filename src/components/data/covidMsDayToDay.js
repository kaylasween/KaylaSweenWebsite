import React from 'react'
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const covidMsDayToDay = ({ data /* see data tab */ }) => {
  console.log(data)
  return (
    <div style={{ height: '60vh' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 50,
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
        colors={{ scheme: 'paired' }}
        pointSize={10}
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