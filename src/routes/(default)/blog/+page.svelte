<script>
  import formatDate from '../../../lib/formatDate'
  export let data
  export let posts = data.posts
</script>

<svelte:head>
  <title>Blog | Kayla Sween</title>
</svelte:head>

<div class="game-level-path">
  <div class="path-segment"></div>
</div>

<div class="game-level">
  <h2>Blog Posts</h2>
  <p>Collect all the blog posts to level up!</p>
  
  <ul class="collectibles">
    {#each posts as post, i}
      <li class="collectible-item{i % 2 === 0 ? ' wooden' : ''}">
        <a href={post.slug.current}>{post.title}</a>
        <span class="crash-date">{formatDate(post.publishedAt)}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .crash-date {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: inherit;
    opacity: 0.8;
  }
</style>
