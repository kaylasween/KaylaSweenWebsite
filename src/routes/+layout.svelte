<script>
    import '../app.css'
    import Logo from '../assets/logo.svelte'
    import Twitter from '../assets/twitter.svelte'
</script>

<Logo />

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
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
</footer>