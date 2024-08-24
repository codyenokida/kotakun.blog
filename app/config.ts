import { getLatestPostMetadata, getPostMetadataBySlug } from "./blog/utils";

export const BASED_LOCATION = "california";

export const CURRENT_LOCATION = "taipei, tw";
export const LAT = 25.1152;
export const LON = 121.515;

// top four posts to recommend to users
export const RECOMMENDED_POSTS = [
  getLatestPostMetadata(),
  getPostMetadataBySlug("vietnam-three"),
  getPostMetadataBySlug("reflection-of-bay-area"),
  getPostMetadataBySlug("living-close-to-friends"),
];
