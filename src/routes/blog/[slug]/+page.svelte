<script>
    import PortableText from '../../../components/PortableText.svelte'

    export let data
</script>

<h1>{data.title}</h1>
<small>{data.publishedAt}</small>
<PortableText blocks={data.body} />