import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineLive } from "next-sanity/live";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
  stega: {
    studioUrl: "/studio",
  },
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "2024-01-01" }),
  serverToken: process.env.SANITY_API_READ_TOKEN,
});
