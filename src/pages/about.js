import React from 'react'
import Layout from '../components/Layout'

import { Link } from 'gatsby'

import CP from '../images/CaptainPiper.jpeg'
import Kayla from '../images/Kayla.jpeg'
import KR from '../images/KaylaRichard.jpeg'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <div className="row">
      <img src={Kayla} alt="Kayla" />
      <div>
        <p>
          Hi! I'm Kayla. I am a front-end developer who is passionate about inclusive design. I advocate for user experience, especially accessibility.
        </p>
        <p>
          I enjoy teaching others about accessibility and other front-end stuff through various speaking engagements, which can be found in the <Link to="/talks">talks section of
          my site</Link>, and blogging on <a href="https://dev.to/kaylasween">The Dev Community</a>. I also enjoy learning about new front-end technologies that I don't necessarily get to use in my
          day-to-day work. Currently, I am learning <a href="https://reactjs.org">React</a> and <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </p>
        <p>
          I love playing video games. I primarily play on my Xbox One but have been known to do some PC gaming. Currently, I'm playing Ark with my husband,
          Richard. Through gaming, I am able to support Blair E. Batson Children's Hospital, Mississippi's only children's hospital,
          via <a href="https://www.extra-life.org/participant/Kayla-Sween">Extra Life</a>.
        </p>
        <p>
          I am a competitive powerlifter. I love competing and learning about different ways to make myself stronger. I became a USA Powerlifting Certified
          Club Coach to spread the word about women's powerlifting and also to help others find their strength. You can find out more about my powerlifting
          endeavors on the <Link to="/powerlifting">powerlifting section of my site</Link>.
        </p>
      </div>
    </div>
    <div className="row">
      <img src={KR} alt="Kayla and Richard at a lights festival." />
      <div>
        <p>
          I'm happily married to my husband, <a href="https://richardsween.dev">Richard</a>. Richard is also a software developer. He shares my passion for teaching other developers and giving users a great experience
          regardless of ability.
        </p>
        <p>
          Richard and I also love to freelance together. Most recently, we have created a timer and clue tool for a local escape room called, <a href="https://enterlocked.com">Enter Locked</a>. If you've played the Murder Motel and
          received a clue or checked how much time you have left, we did that!
        </p>
        <p>
          We love to travel. Richard travels for work, so I tag along when possible. We typically also attend conferences together, especially when I'm speaking. If you've ever
          heard me speak at a conference, Richard has probably heard that talk dozens of times before! Thankfully, he's still in the crowd of those talks for support.
        </p>
      </div>
    </div>
    <div className="row">
      <img src={CP} alt="Captain and Piper sharing a blanket on the couch." />
      <p>
        Richard and I have two dogs, Captain and Piper. Captain is a 8-year-old, short-haired Jack Russell Terrier. We've been told we should have named
        him Wishbone because of the markings on his face. He loves sunbathing, eating, and napping. Piper is a 2-year-old, wire-haired Jack Russell Terrier.
        She also goes by Pipathan Louise, Piberham, and most often, Pipey. She's our wild child and loves playing with her <a href="https://www.amazon.com/s?k=jw+holee+roller">JW HOL-ee Roller</a>.
      </p>
    </div>
  </Layout >
)

export default AboutPage
