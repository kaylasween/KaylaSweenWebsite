<script>
    import formatDate from '../../lib/formatDate'

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
            {formatDate(post.publishedAt)}
        </li>
    {/each}
</ul>

<style>
    .blog-list {
        display: flex;
        justify-content: space-evenly;
        padding-left: 0;
    }

    .blog-list-item {
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 1rem;
        padding: 1rem;
        width: 50%;
    }
</style>