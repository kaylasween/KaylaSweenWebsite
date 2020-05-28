import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

import MagnoliaJS from '../images/MagnoliaJS.jpeg'

const Talks = () => (
  <Layout>
    <Helmet>
      <title>Teaching | Kayla Sween</title>
    </Helmet>
    <h1>Teaching</h1>
    <h2>Talks</h2>
    <div class="row">
      <img src={MagnoliaJS} alt="Kayla speaking at MagnoliaJS 2019. Her talk was 'How to Avoid SUX'." />
      <div>
        <h3>Conferences</h3>
        <h4><a href="https://magnoliajs.com">MagnoliaJS</a></h4>
        <h5>2019</h5>
        <p>I spoke about avoiding SUX, or some user experience, at MagnoliaJS in 2019.
          You can find the slides for <a href="https://github.com/kaylasween/accessibility/blob/master/HowtoAvoidSux-MagnoliaJS19.pdf">"How to Avoid SUX" on my GitHub</a>.</p>
        <h5>2020</h5>
        <p>I spoke about progressive enhancement in React at MagnoliaJS 2020. This conference was virtual due to the COVID-19 pandemic, but fortunately, that means
            it was recorded! You can watch <a href="https://youtu.be/BC4xOOk2VUY?t=7167">Progressive Enhancement for React on Youtube</a>.
          </p>
        <h4><a href="https://www.renderatl.com">Render(ATL)</a></h4>
        <p>I'll be speaking at Render(ATL) in August 2020 about progressive enhancement for React. I hope to see you there!</p>
      </div>
    </div>
    <h3>Meetups</h3>
    <h4><a href="https://jacksondevs.tech">Jackson Area Web and App Developers (JAWAD) Meetup</a></h4>
    <p>You can find the <a href="https://github.com/kaylasween/JAWAD-Pour/blob/master/pour.png">slides for my talk about P.O.U.R.</a> at the July 2019 JAWAD
    Meetup on Github.</p>
    <h2>Instructing</h2>
    <h3><a href="https://egghead.io/instructors/kayla-sween">egghead.io</a></h3>
    <p>As of May 2020, I have started publishing content on <a href="https://egghead.io/">egghead.io</a>. You can check out my lessons on <a href="https://egghead.io/instructors/kayla-sween">my instructor page</a>!</p>
    <h2>Blog Posts</h2>
    <h3><a href="https://dev.to/kaylasween">Dev.to</a></h3>
    <p>I sometimes write blog posts for the Dev Community. You can check those out by going to <a href="https://dev.to/kaylasween">my Dev.to profile</a>!</p>
  </Layout>
)

export default Talks
