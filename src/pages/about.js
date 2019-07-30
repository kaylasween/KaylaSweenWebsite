import React from 'react'
import Layout from '../components/Layout'

import { Link } from 'gatsby'

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
      <Col md={9}>
        <p>
          Hi! I'm Kayla. I am a front-end developer who is passionate about inclusive design. I advocate for user experience, especially accessibility.
        </p>
        <p>
          I enjoy teaching others about accessibility through various speaking engagements, which can be found in the <Link to="/talks">talks section of my site</Link>, and other front-end stuff. I also enjoy learning about new front-end technologies 
          that I don't necessarily get to use in my day-to-day work. Currently, I am learning to use <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </p>
        <p>
          I love playing video games. I primarily play on my Xbox One but have been known to do some PC gaming. Currently, we're playing Minecraft 
          with a couple of friends. Through gaming, I am able to support Blair E. Batson Children's Hospital, Mississippi's only children's hospital, 
          via <a href="https://www.extra-life.org/participant/305822">Extra Life</a>.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={9}>
        <p>
          I'm happily married to my husband, <a href="https://richardsween.com">Richard</a>. Richard is also a software developer. We love to travel, game, 
          and freelance together. 
        </p>
        <p>
          Richard and I have two dogs, Captain and Piper. Captain is a 7-year-old, short-haired Jack Russell Terrier. We've been told we should have named 
          him Wishbone because of the markings on his face. He loves sunbathing and napping. Piper is a 2-year-old, wire-haired Jack Russell Terrier. 
          She also goes by Pipathan Louise, Piberham, and most often, Pipey. She's our wild child.
        </p>
      </Col>
      <Col>
        <img src={Captain} alt="Captain, Kayla's short-haired Jack Russell Terrier, laying down on a patch of carpet." />
      </Col>
    </Row>
    <Row>
      <Col>
        <img src={Piper} alt="Piper, Kayla's long-haired Jack Russell Terrier, sitting down with a lavender-colored bow around her neck." />
      </Col>
      <Col md={9}>
        
        <p>
          I am a competitive powerlifter. I love competing and learning about different ways to make myself stronger. I became a USA Powerlifting Certified 
          Club Coach to spread the word about women's powerlifting and also to help others find their strength. You can find out more about my powerlifting 
          endeavors on the <Link to="/powerlifting">powerlifting section of my site</Link>.
        </p>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
