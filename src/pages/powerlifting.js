import React from 'react'
import Layout from '../components/Layout'

import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'

import deadlift from '../images/IMG_7742.jpeg'

const PowerliftingPage = () => (
  <Layout>
    <h1>Powerlifting</h1>
    <Row>
      <Col>
        <img src={deadlift} alt="Kayla deadlifting 298lbs." />
      </Col>
      <Col>
        <p>Programming</p>
        <p>certification</p>
        <p>Best lifts</p>
      </Col>
    </Row>
  </Layout>
)

export default PowerliftingPage
