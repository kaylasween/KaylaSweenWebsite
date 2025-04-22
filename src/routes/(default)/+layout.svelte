<script>
  import './app.css'
  import Logo from '../../assets/logo.svelte'
  import Github from '../../assets/github.svelte'
  import Twitter from '../../assets/twitter.svelte'
  import CrateExplosion from './CrateExplosion.svelte'
</script>

<!-- Game World Background Elements -->
<div class="game-background">
  <div class="clouds"></div>
  <div class="mountains"></div>
  <div class="trees"></div>
  <div class="game-path"></div>
</div>

<div class="game-content">
  <div class="crash-logo">
    <a href="/" aria-label="Home">
      <Logo />
      <span class="visually-hidden">Home</span>
    </a>
  </div>

  <h1 class="game-title">Kayla Sween</h1>

  <nav>
    <ul>
      <li class="menu-item"><a href="/">Home</a></li>
      <li class="menu-item"><a href="/blog">Blog</a></li>
      <li class="menu-item"><a href="/projects">Projects</a></li>
      <li class="menu-item"><a href="/talks">Talks</a></li>
    </ul>
  </nav>

  <main>
    <!-- Game objects -->
    <div class="crash-crate left"></div>
    <div class="crash-crate right"></div>
    <div class="crash-fruit left"></div>
    <div class="crash-fruit right"></div>
    
    <slot />
  </main>

  <footer>
    <a href="https://twitter.com/_KaylaSween" aria-label="Twitter">
      <Twitter />
      <span class="visually-hidden">Twitter</span>
    </a>
    <a href="https://github.com/kaylasween" aria-label="Github">
      <Github />
      <span class="visually-hidden">Github</span>
    </a>
  </footer>
</div>

<CrateExplosion />
