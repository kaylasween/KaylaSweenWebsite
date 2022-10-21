import client from '../../lib/sanityClient'

export async function load({ params }) {
    const posts = await client.fetch(/* groq */`*[
        _type == "post"
    ]{
        title,
        publishedAt,
        slug
    }`)

    return {
        posts
    }
}