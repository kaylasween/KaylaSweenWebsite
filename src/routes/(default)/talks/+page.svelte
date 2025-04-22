<script>
  export let data
  export let talks = data.talks
</script>

<svelte:head>
  <title>Talks | Kayla Sween</title>
</svelte:head>

<div class="game-level-path">
  <div class="path-segment"></div>
</div>

<div class="game-level">
  <h2>Talk Bonus Level</h2>
  <p>Collect these special items to hear me speak!</p>
  
  <ul class="collectibles">
    {#each talks as talk, i}
      <li class="collectible-item{i % 3 === 0 ? ' wooden' : ''}">
        <a href={talk.url}>{talk.title}</a> - <span class="crash-conference">{talk.conference}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .crash-conference {
    font-style: italic;
    opacity: 0.9;
  }
</style>