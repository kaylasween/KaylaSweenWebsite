<script>
    export let data
    export let talks = data.talks
</script>

<svelte:head>
	<title>Talks | Kayla Sween</title>
</svelte:head>
    
<h1>Talks</h1>
<ul>
    {#each talks as talk}
        <li>{talk.title} - {talk.conference}</li>
    {/each}
</ul>
<a href="/">Home</a>
<p>In the meantime, you can check out my <a href="https://dev.to/kayla">Dev blog</a>, <a href="https://egghead.io/q/resources-by-kayla-sween">Egghead videos</a>, or the conference that I organize, <a href="https://magnoliajs.com">MagnoliaJS</a>.</p>

<style>
    li {
        list-style-type: none;
    }
</style>