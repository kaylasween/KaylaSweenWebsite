import React from 'react'

import Layout from '../components/Layout'

import MagnoliaJS from '../images/MagnoliaJS.jpeg'

const Talks = () => (
  <Layout>
    <h1>Talks</h1>
    <div class="flex">
      <img src={MagnoliaJS} alt="Kayla speaking at MagnoliaJS 2019. Her talk was 'How to Avoid SUX'." style={{ alignSelf: 'flex-start', marginRight: '1rem' }} />
      <div>
        <h2>Conferences</h2>
        <h3><a href="https://magnoliajs.com">MagnoliaJS</a></h3>
        <p>I spoke about avoiding SUX, or some user experience, at MagnoliaJS in 2019. You can find the slides for <a href="https://github.com/kaylasween/accessibility/blob/master/HowtoAvoidSux-MagnoliaJS19.pdf">"How to Avoid SUX" on my GitHub</a>. </p>
        <h3><a href="https://www.renderatl.com">Render(ATL)</a></h3>
        <p>I'll be speaking at Render(ATL) in May 2020 about progressive enhancement for React. I hope to see you there!</p>
      </div>
    </div>
    <h2>Meetups</h2>
    <h3><a href="https://jacksondevs.tech">Jackson Area Web and App Developers (JAWAD) Meetup</a></h3>
    <p>You can find the <a href="https://github.com/kaylasween/JAWAD-Pour/blob/master/pour.png">slides for my talk about P.O.U.R.</a> at the July 2019 JAWAD
    Meetup on Github.</p>
  </Layout>
)

export default Talks
