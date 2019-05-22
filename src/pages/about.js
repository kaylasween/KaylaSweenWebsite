import React from 'react'
import Layout from '../components/layout'

import deadlift from '../images/IMG_7742.jpeg'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <img src={deadlift} alt="Kayla deadlifting 298lbs." />
    <p>Kayla is a web developer who is passionate about front-end design and development. She is an advocate for user experience,
    especially accessibility. She has spoken at <a href="https://magnoliajs.com" target="_blank">MagnoliaJS</a> about accessibility.</p>
    <p>In her spare time, she enjoys learning new front-end technologies. Currently, she is learning <a href="" target="_blank">Gatsby</a>.
    She also enjoys travelling with her husband, Richard, playing with her dogs, Captain and Piper, and competing in powerlifting.</p>
  </Layout>
)

export default AboutPage
