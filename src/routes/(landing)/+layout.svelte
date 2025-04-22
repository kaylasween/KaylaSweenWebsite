<script>
  import './links.css'
  import Github from '../../assets/github.svelte'
  import Twitter from '../../assets/twitter.svelte'
</script>

<main>
  <slot />
</main>

<footer>
  <a href="https://twitter.com/_KaylaSween">
    <Twitter />
    <span class="visually-hidden">Twitter</span>
  </a>
  <a href="https://github.com/kaylasween">
    <Github />
    <span class="visually-hidden">Github</span>
  </a>
</footer>
