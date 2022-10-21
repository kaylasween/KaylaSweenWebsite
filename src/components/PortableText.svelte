<script>
    export let blocks = []
    export let serializers = undefined
  </script>
  
  {#each blocks as block, index (block._key)}
    {#if serializers?.types?.[block._type]}
      <!-- Custom block-level element -->
      <svelte:component
        this={serializers.types[block._type]}
        {block}
        {index}
        {blocks}
      />
    {:else}
      <!-- Block _type not yet supported -->
    {/if}
  {/each}