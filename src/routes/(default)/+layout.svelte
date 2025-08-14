<script>
  import './app.css'
  import Logo from '../../assets/logo.svelte'
  import Github from '../../assets/github.svelte'
  import Mastodon from '../../assets/mastodon.svelte'
  import Twitter from '../../assets/twitter.svelte'
  import Magnolia from '../../assets/magnolia.svelte'
</script>

<a href="/" class="logo">
  <Logo />
  <span class="visually-hidden">Home</span>
</a>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/talks">Talks</a></li>
  </ul>
</nav>

<main>
  <slot />
</main>

<footer>
  <a href="https://twitter.com/_KaylaSween">
    <Twitter />
    <span class="visually-hidden">Twitter</span>
  </a>
  <a href="https://mas.to/@kaylasween">
    <Mastodon />
    <span class="visually-hidden">Mastodon</span>
  </a>
  <a href="https://github.com/kaylasween">
    <Github />
    <span class="visually-hidden">Github</span>
  </a>
  <a href="https://magnoliaconf.com">
    <Magnolia />
    <span class="visually-hidden">MagnoliaConf</span>
  </a>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  footer a:last-child {
    margin-left: 0;
  }
</style>
