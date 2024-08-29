import { getLatestPostMetadata, getPostMetadataBySlug } from "./blog/utils";

// top four posts to recommend to users
export const RECOMMENDED_POSTS = [
  getLatestPostMetadata(),
  getPostMetadataBySlug("vietnam-three"),
  getPostMetadataBySlug("reflection-of-bay-area"),
  getPostMetadataBySlug("living-close-to-friends"),
];
