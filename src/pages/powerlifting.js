import React from 'react'
import Layout from '../components/Layout'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import deadlift from '../images/IMG_7742.jpeg'

const PowerliftingPage = () => (
  <Layout>
    <h1>Powerlifting</h1>
    <Row>
      <Col>
        <img src={deadlift} alt="Kayla deadlifting 298lbs." />
      </Col>
      <Col>
        <h2>Programming</h2>
        <p>I'll be offering programming-only coaching options over at <a href="">Coaching Business</a> soon!</p>
        <h2>Certification</h2>
        <p>I'm a <a href="https://coaching.usapowerlifting.com/certified-coaches/">USA Powerlifting (USAPL) Certified Club Coach</a>, which means I can coach competitive powerlifters at the local and state level at USAPL 
          events. This also means I understand the mechanics of human movement and the principles and methodology of strength training.</p>
        <h2>Best Lifts</h2>
        <p>Currently, my best lifts are as follows:</p>
        <ul>
          <li>Squat: 275.5lbs/125kg</li>
          <li>Bench Press: 187.4lbs/85kg</li>
          <li>Deadlift: 319.6lbs/145kg</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
      <h2>Powerlifting vs Weightlifting</h2>
        <p>
          I usually get asked questions about powerlifting that are more applicable to olympic weightlifting. Powerlifting is a competitve sport that is 
          comprised of the squat, bench press, and deadlift. Olympic weightlifting is comprised of the overhead movements: the clean and jerk and the 
          snatch. I usually joke that I'm not athletic or coordinated enough to be a weightlifter!
        </p>
      </Col>
    </Row>
  </Layout>
)

export default PowerliftingPage
