<script>
    export let data
    export let posts = data.posts
</script>

<svelte:head>
	<title>Blog | Kayla Sween</title>
</svelte:head>
    
<h1>Blog</h1>
<ul class="blog-list">
    {#each posts as post}
        <li class="blog-list-item">
            <a href={post.slug.current}>{post.title}</a>
        </li>
    {/each}
</ul>

<style>
    .blog-list {
        padding-left: 0;
    }

    .blog-list-item {
        list-style-type: none;
    }
</style>