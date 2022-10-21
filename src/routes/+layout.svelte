<script>
    import '../app.css'
    import Logo from '../assets/logo.svelte'
    import Twitter from '../assets/twitter.svelte'
</script>

<main>
    <Logo />
	<slot />
    <a href="https://twitter.com/_KaylaSween">
        <Twitter />
        <span class="visually-hidden">Twitter</span>
    </a>
</main>