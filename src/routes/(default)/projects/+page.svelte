<script>
    export let data
    export let projects = data.projects
</script>

<svelte:head>
	<title>Projects | Kayla Sween</title>
</svelte:head>

<div class="game-level-path">
  <div class="path-segment"></div>
</div>

<div class="game-level">
  <h2>Project Crates</h2>
  <p>Smash these crates to see my awesome projects!</p>
  
  <ul class="collectibles">
    {#each projects as project, i}
      <li class="collectible-item{i % 2 === 1 ? ' wooden' : ''}">
        <a href={project.url}>{project.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
    .collectibles {
        padding-left: 0;
    }

    .collectible-item {
        list-style-type: none;
    }
</style>