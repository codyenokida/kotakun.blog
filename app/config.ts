import { getLatestPostMetadata, getPostMetadataBySlug } from "./blog/utils";

// top four posts to recommend to users
export const RECOMMENDED_POSTS = [
  getLatestPostMetadata(),
  getPostMetadataBySlug("too-many-blogs"),
  getPostMetadataBySlug("vietnam-three"),
  getPostMetadataBySlug("living-close-to-friends"),
];
