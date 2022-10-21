import client from '../../lib/sanityClient'

export const load = async ({ params }) => {
    const talks = await client.fetch(/* groq */`*[
        _type == "talk"
    ]{
        title,
        conference,
        date,
        url
    }`)

    return {
        talks
    }
}