import React from 'react'
import Layout from '../components/Layout'

import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'

import Captain from '../images/Captain.jpg'
import Kayla from '../images/Kayla.jpg'
import Piper from '../images/Piper.jpg'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <Row>
      <Col>
        <img src={Kayla} alt="Kayla" />
      </Col>
      <Col>
        <p>Kayla is a front-end developer who is passionate about inclusive design. She is an advocate for user experience,
        especially accessibility. She has spoken at <a href="https://magnoliajs.com">MagnoliaJS</a> about accessibility.</p>
        <p>In her spare time, she enjoys learning new front-end technologies. Currently, she is learning <a href="">Gatsby</a>.</p>
        <p>She also enjoys travelling with her husband, Richard. </p>
        <p>She is a gamer and enjoys supporting <a href="https://www.extra-life.org/participant/305822">Extra Life</a>.</p>
      </Col>
      </Row>
      <Row>
      <Col>
        <p>She has two dogs, Captain and Piper.</p>
        <p>Kayla also competes in powerlifting. Her current best lifts are 275.5lbs/125kg in the squat, 187.4lbs/85kg in the bench press,
        and 319.6lbs/145kg in the deadlift. She is also a certified <a href="https://coaching.usapowerlifting.com/certified-coaches/">USA 
        Powerlifting Club Coach</a>.</p>
      </Col>
      <Col>
        <img src={Piper} alt="Piper, Kayla's long-haired Jack Russell Terrier, sitting down with a lavender-colored bow around her neck." />
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
