import React from 'react'
import Layout from '../components/layout'

import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/container'
import deadlift from '../images/IMG_7742.jpeg'
import Row from 'react-bootstrap/row'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <Row>
      <Col>
        <img src={deadlift} alt="Kayla deadlifting 298lbs." />
      </Col>
      <Col>
        <p>Kayla is a web developer who is passionate about front-end design and development. She is an advocate for user experience,
        especially accessibility. She has spoken at <a href="https://magnoliajs.com" target="_blank">MagnoliaJS</a> about accessibility.</p>
        <p>In her spare time, she enjoys learning new front-end technologies. Currently, she is learning <a href="" target="_blank">Gatsby</a>.</p>
        <p>She also enjoys travelling with her husband, Richard. </p>
        <p>She is a gamer and enjoys supporting <a href="" target="_blank">Extra Life</a>.</p>
        <p>She has two dogs, Captain and Piper.</p>
        <p>Kayla also competes in powerlifting. Her current lifts are 275.5lbs/125kg in the squat, 187.4lbs/85kg in the bench press,
        and 319.6lbs/145kg in the deadlift.</p>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
