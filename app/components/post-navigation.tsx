import Link from "next/link";
import { getBlogPosts } from "../blog/utils";

const ArrowSVG = () => {
  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.75292C3.42056 7.75292 6.72714 9.13901 9.49729 8.99623M9.49729 8.99623C10.8867 8.92462 12.1411 8.46841 13.0811 7.25981C14.4022 5.56135 14.6367 1.69463 11.6018 1.92809C9.76913 2.06906 9.37657 6.37985 9.49729 8.99623ZM9.49729 8.99623C9.53378 9.78707 9.61716 10.4231 9.72184 10.7424C10.4191 12.8691 13.9877 12.3369 15.5775 11.8827C18.4923 11.0499 21.2968 8.99325 23.7196 7.21649L23.7446 7.19818M20.2344 6.22514C21.5585 6.06625 22.7681 5.42703 24.1315 5.39337C24.5228 5.38371 25.3495 5.14206 25.3221 5.67626C25.2737 6.62117 25.1094 7.57918 24.9497 8.51085L24.9463 8.53046C24.8999 8.80144 24.7943 9.61605 24.7943 9.34112"
        stroke="#4F8F4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface PostNavigationProps {
  currentSlug: string;
}

export function PostNavigation({ currentSlug }: PostNavigationProps) {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const prevPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between mt-4">
      <PostLink direction="prev" post={prevPost} label="Prev" />
      <PostLink direction="next" post={nextPost} label="Next" />
    </div>
  );
}

interface PostLinkProps {
  direction: "prev" | "next";
  post: ReturnType<typeof getBlogPosts>[number] | null;
  label: string;
}

function PostLink({ direction, post, label }: PostLinkProps) {
  const baseClasses =
    "flex flex-col w-full md:w-[400px] items-start p-2 border border-green-faded rounded-md transition-opacity hover:bg-green-faded-xl hover:border-green transition-all duration-300";
  const activeClasses = "hover:bg-gray-100";
  const inactiveClasses = "opacity-50 cursor-not-allowed";

  return (
    <div
      className={`${baseClasses} ${post ? activeClasses : inactiveClasses} ${
        direction === "next" ? "items-end text-right" : ""
      }`}
    >
      {post ? (
        <Link
          href={`/blog/${post.slug}`}
          className={`no-underline flex flex-col w-full ${
            direction === "next" ? "items-end" : ""
          }`}
        >
          <div
            className={`flex items-center ${
              direction === "prev" ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <span className="text-sm text-gray-500 italic">{label}</span>
            <div
              className={`${direction === "prev" ? "rotate-180 mr-1" : "ml-1"}`}
            >
              <ArrowSVG />
            </div>
          </div>
          <span className="font-bold font-patrick-hand-sc">
            {post.metadata.title}
          </span>
        </Link>
      ) : (
        <>
          <div
            className={`flex items-center ${
              direction === "prev" ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-sm text-gray-500 italic">{label}</span>
            <div
              className={`${direction === "prev" ? "rotate-180 mr-1" : "ml-1"}`}
            >
              <ArrowSVG />
            </div>
          </div>
          <span className="font-medium font-patrick-hand-sc">
            {direction === "prev"
              ? "No more to look at :)"
              : "Check back later for more posts!"}
          </span>
        </>
      )}
    </div>
  );
}
