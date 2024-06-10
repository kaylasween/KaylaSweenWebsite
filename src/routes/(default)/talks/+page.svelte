<script>
    export let data
    export let talks = data.talks
</script>

<svelte:head>
	<title>Talks | Kayla Sween</title>
</svelte:head>
    
<h1>Talks</h1>
<ul class="talk-list">
    {#each talks as talk}
        <li class="talk-list-item">
            <a href={talk.url}>{talk.title}</a> - {talk.conference}
        </li>
    {/each}
</ul>

<style>
    .talk-list {
        padding-left: 0;
    }

    .talk-list-item {
        list-style-type: none;
    }
</style>