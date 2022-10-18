import client from '@sanity/client'

export const get = async () => {
    const posts = await client.fetch(/* query */)
}