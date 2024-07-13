import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { SanityClient } from "next-sanity";

export const client = createClient({
  projectId: 'nh5z193g',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2022-03-07', // use current date (YYYY-MM-DD) to target the latest API version
  perspective: 'published',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
// export function getClient(): SanityClient {
//     return client
// }
const imageBuilder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return imageBuilder.image(source);
}
