<script>
  import Logo from './assets/logo.svelte'
  import Mastodon from './assets/mastodon.svelte'
  import Twitter from './assets/twitter.svelte'
</script>

<main>
  <Logo className="logo" />
  <h1>Hey! I'm Kayla Sween.</h1>
  <p>I'm currently rebuilding my website using Svelte. Come back later!</p>
  <p>In the meantime, you can check out my <a href="https://dev.to/kayla">Dev blog</a>, <a href="https://egghead.io/q/resources-by-kayla-sween">Egghead videos</a>, or the conference that I organize, <a href="https://magnoliajs.com">MagnoliaJS</a>.</p>
</main>

<footer>
  <a href="https://twitter.com/_KaylaSween">
    <Twitter />
    <span class="visually-hidden">Twitter</span>
  </a>
  <a rel="me" href="https://mas.to/@kaylasween">
    <Mastodon />
    <span class="visually-hidden">Mastodon</span>
  </a>
</footer>

<style>
  .visually-hidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }
</style>
