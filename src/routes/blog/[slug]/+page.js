import { error } from '@sveltejs/kit';
import client from '../../../lib/sanityClient'
 
export async function load({ params }) {
   // Access the _id from the params object ✨
   params = `blog/${params.slug}`
   const post = await client.fetch(
     /* groq */ `*[
       _type == "post" &&
       slug.current == $params
     ][0]`,
     { params }
   );

   console.log(post)
 
   if (!post?.slug) {
     return {
       status: 404,
     };
   }
 
   return post;
}