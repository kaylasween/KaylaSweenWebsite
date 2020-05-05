import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

import deadlift from '../images/IMG_7742.jpeg'

const PowerliftingPage = () => (
  <Layout>
    <Helmet>
      <title>Powerlifting | Kayla Sween</title>
    </Helmet>
    <h1>Powerlifting</h1>
    <div className="row">
      <img className="body__img" src={deadlift} alt="Kayla deadlifting 298lbs." />
      <div>
        <p>
          I'm a competitive powerlifter and extremely passionate about powerlifting. I intend to continue competing in full power competitions late 2020 after recovering from knee
          surgery in fall of 2019.
        </p>
        <h2>Programming</h2>
        <p><em>I'll be offering programming-only coaching options soon!</em></p>
        <h2>Certification</h2>
        <p>
          I'm a <a href="https://coaching.usapowerlifting.com/certified-coaches/">USA Powerlifting (USAPL) Certified Club Coach</a>, which means
          I can coach competitive powerlifters at the local and state level at USAPL events. This also means I understand the mechanics of human movement
          and the principles and methodology of strength training.
        </p>
        <p>
          I'm very passionate about powerlifting and am always trying to improve my knowledge when it comes to training for myself and coaching
          other athletes. Next up on my strength training reading list is <a
            href="https://aasgaardco.com/store/books-posters-dvd/books/starting-strength-basic-barbell-training/"><em>Starting Strength:
          Basic Barbell Training</em> by Mark Rippetoe</a>.
        </p>
      </div>
    </div>
    <h2>Best Lifts</h2>
    <p>Currently, my best competition lifts are as follows:</p>
    <ul>
      <li>Squat: 275.5lbs/125kg</li>
      <li>Bench Press: 187.4lbs/85kg</li>
      <li>Deadlift: 319.6lbs/145kg</li>
    </ul>
    <h2>Powerlifting vs Weightlifting</h2>
    <p>
      I usually get asked questions about powerlifting that are more applicable to olympic weightlifting. Powerlifting is a competitve sport that is
      comprised of the squat, bench press, and deadlift. Olympic weightlifting is comprised of the overhead movements: the clean and jerk and the
      snatch. I usually joke that I'm not athletic or coordinated enough to be a weightlifter but would love to give it a try one day!
        </p>
  </Layout>
)

export default PowerliftingPage
