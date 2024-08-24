import HyperLink from "./hyperlink";
import { formatShortDate, getBlogPosts } from "../blog/utils";

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  // Group blogs by year
  const blogsByYear = allBlogs.reduce<Record<number, typeof allBlogs>>(
    (acc, post) => {
      const year = new Date(post.metadata.publishedAt).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {}
  );
  // Sort years in descending order
  const sortedYears = Object.keys(blogsByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div>
      {sortedYears.map((year) => (
        <div key={year}>
          <h3 className="text-2xl font-bold mt-8 mb-4">{year}</h3>
          {blogsByYear[year as unknown as keyof typeof blogsByYear]
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post) => (
              <div key={post.slug} className="w-full flex pb-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[60px] mr-4 tabular-nums">
                  {formatShortDate(post.metadata.publishedAt)}
                </p>
                <div className="flex-1">
                  <HyperLink href={`/blog/${post.slug}`}>
                    {post.metadata.title}
                  </HyperLink>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
