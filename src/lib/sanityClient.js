import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'dc87bbon',
  dataset: 'production',
  apiVersion: '2023-11-29',
  useCdn: true,
});

export default client