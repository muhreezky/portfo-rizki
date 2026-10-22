/// <reference types="vite/client" />
import { createDirectus, readItems, rest } from "@directus/sdk";

const DIRECTUS_URL = import.meta.env.DIRECTUS_URL;
const client = createDirectus(DIRECTUS_URL).with(rest());

export default client;
export { getPageData };

export async function getPageData(slug: string) {
  try {
    const pages = await client.request(
      readItems("pages", {
        fields: ["*", "blocks.*", "blocks.item.*.*.*.*"],
        filter: {
          permalink: {
            _eq: slug,
          },
        },
        limit: 1,
      })
    );
    if (pages.length === 0) {
      throw new Error(`Page with slug "${slug}" not found.`);
    }
    return {
      data: pages[0],
    };
  } catch (error) {
    throw error;
  }
}