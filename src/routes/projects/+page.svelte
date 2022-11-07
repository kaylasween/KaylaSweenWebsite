<script>
    export let data
    export let projects = data.projects
</script>

<svelte:head>
	<title>Projects | Kayla Sween</title>
</svelte:head>
    
<h1>Projects</h1>
<ul class="project-list">
    {#each projects as project}
        <li class="project-list-item">
            <a href={project.slug.current}>{project.title}</a>
        </li>
    {/each}
</ul>

<style>
    .project-list {
        padding-left: 0;
    }

    .project-list-item {
        list-style-type: none;
    }
</style>