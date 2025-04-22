<script>
  import Github from '../../../assets/github.svelte'
  import JavaScript from '../../../assets/javascript.svelte'
  import LinkedIn from '../../../assets/linkedin.svelte'
  import Kayla from '../../../assets/kayla.jpeg'
  import Watch from '../../../assets/watch.svelte'
</script>

<img src={Kayla} alt="Kayla Sween" />
<h1>Kayla Sween</h1>
<small
  >I've got 9 years of experience in front-end development with 2 years of
  technical leadership experience. I'm open for senior front-end engineer,
  technical lead, or first-time engineering management roles!</small
>
<ul>
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
  <li>
    <a
      href="https://www.etsy.com/listing/1306932844/anti-javascript-javascript-club-stickers"
      ><JavaScript /><span>Anti JS JS Club Stickers</span></a
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
    margin-bottom: 0.5rem;
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
    color: #011e11;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #123123;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    padding: 1rem;
    text-decoration: none;
  }

  a * {
    margin-left: 0.5rem;
  }

  a:hover {
    /* background: radial-gradient(40% 50% at center 100%, #fbe3e8, transparent),
      radial-gradient(80% 100% at center 120%, #ebf6f5, transparent), #95f4f1; */
    box-shadow: 0 0 3px 3px #5cbdb9;
  }
</style>
