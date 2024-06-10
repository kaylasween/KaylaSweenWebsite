import client from '../../../lib/sanityClient'

export async function load({ params }) {
    const projects = await client.fetch(/* groq */`*[
        _type == "project"
    ]{
        title,
        description,
        url
    }`)

    return {
        projects
    }
}