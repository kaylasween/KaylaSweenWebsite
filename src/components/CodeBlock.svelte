<script>
    /** @type {import("@portabletext/svelte").CustomBlockComponentProps} */
    export let portableText
  
    $: ({value} = portableText)
</script>
  
<pre class="code-block"><code>{value.code}</code></pre>

<style>
    .code-block {
        background-color: black;
        color: white;
        overflow: scroll;
        padding: 1rem;
    }
</style>