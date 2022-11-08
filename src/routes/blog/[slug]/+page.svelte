<script>
    import { PortableText } from '@portabletext/svelte'
    import CodeBlock from '../../../components/CodeBlock.svelte'
    import formatDate from '../../../lib/formatDate'

    export let data
</script>

<h1>{data.title}</h1>
<small>{formatDate(data.publishedAt)}</small>
<div class="blog-content">
    <PortableText 
    value={data.body} 
    components={{
        types: {
            code: CodeBlock,
        }
    }}
    />
</div>

<style>
    .blog-content {
        text-align: left;
    }
</style>