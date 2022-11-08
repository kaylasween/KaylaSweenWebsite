<script>
    /** @type {import("@portabletext/svelte").CustomBlockComponentProps} */
    export let portableText
  
    $: ({value} = portableText)
</script>
  
<pre>
    <code>{value.code}</code>
</pre>