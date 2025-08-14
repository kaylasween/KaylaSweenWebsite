<script>
  import Github from '../../../assets/github.svelte'
  import LinkedIn from '../../../assets/linkedin.svelte'
  import Kayla from '../../../assets/kayla.jpeg'
  import Watch from '../../../assets/watch.svelte'
  import Magnolia from '../../../assets/magnolia.svelte'
</script>

<img src={Kayla} alt="Kayla Sween" />
<h1><a href="https://kaylasween.dev">Kayla Sween</a></h1>
<small
  >I've got 10 years of experience in front-end development with 2 years of
  technical leadership experience. I'm available for senior front-end engineer,
  technical lead, or first-time engineering management roles!</small
>
<ul>
  <li>
    <a
      href="https://shop.magnoliaconf.com"
      ><Magnolia /><span>MagnoliaConf Merch</span></a
    >
  </li>
  <li>
    <a href="https://www.linkedin.com/in/kayla-sween/"
      ><LinkedIn /><span>LinkedIn</span></a
    >
  </li>
  <li><a href="https://github.com/kaylasween"><Github />&nbsp;GitHub</a></li>
  <li>
    <a href="https://apps.apple.com/us/app/doodlefidget/id6477495440"
      ><Watch /><span>DoodleFidget</span></a
    >
  </li>
</ul>

<style>
  img {
    border-radius: 50%;
    display: block;
    margin: 2rem auto;
    height: 200px;
    width: 200px;
  }

  h1 {
    margin: 0 auto 0.5rem auto;
    width: max-content;
  }

  h1 a {
    text-decoration: underline;
    background: none;
    border: 3px solid transparent;
    box-sizing: border-box;
    padding: 0;
  }

  h1 a:hover {
    background: none;
    border: 3px solid transparent;
    padding: 0;
  }

  ul {
    margin: 1rem auto;
    padding-left: 0;
    width: max-content;
  }

  li {
    list-style-type: none;
    margin: 0.75rem;
  }

  a {
    background: white;
    color: #011e11;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #123123;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    padding: 1rem;
    text-decoration: none;
    box-sizing: border-box;
  }

  a * {
    margin-left: 0.5rem;
  }

  a:hover {
    /* background: radial-gradient(40% 50% at center 100%, #fbe3e8, transparent),
      radial-gradient(80% 100% at center 120%, #ebf6f5, transparent), #95f4f1; */
    /* Rainbow gradient border effect */
    position: relative;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(90deg,
                  #ff0000, #ff7f00, #ffff00, #00ff00,
                  #0000ff, #4b0082, #9400d3, #ff0000
                ) border-box;
    border: 3px solid transparent;
    padding: calc(1rem - 2px); /* Reduce padding to compensate for thicker border */
  }

  /* Rainbow squiggly underline for h1 link */
  h1 a {
    position: relative;
    text-decoration: none;
    color: inherit;
  }

  h1 a:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg,
      #ff0000, #ff7f00, #ffff00, #00ff00,
      #0000ff, #4b0082, #9400d3, #ff0000
    );
    background-size: 200% 100%;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5' stroke='black' stroke-width='5' fill='none'/%3E%3C/svg%3E") repeat-x;
    mask-size: 20px 100%;
    animation: rainbow-wave 2s ease-in-out infinite;
  }

  @keyframes rainbow-wave {
    0% {
      background-position: 0% 0%;
      mask-position: 0px 0%;
    }
    50% {
      background-position: -100% 0%;
      mask-position: -10px 0%;
    }
    100% {
      background-position: -200% 0%;
      mask-position: -20px 0%;
    }
  }
</style>
