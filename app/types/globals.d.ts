declare global {
  type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    thumbnail: string;
  };

  type PostPreviewMetadata = {
    slug: string;
    title: string;
    publishedAt: string;
    summary: string;
    thumbnail: string;
  };

  type PostData = {
    id: string;
    title: string;
    description: string;
    datePosted: Date;
    thumbnail: string;
  };

  type YearPosts = {
    [key: string]: PostData;
  };

  type AllPosts = {
    2023: YearPosts;
    2024: YearPosts;
  };

  type OrderedPosts = {
    [year: number]: PostData[];
  };
}

export {};
