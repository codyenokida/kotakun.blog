import { BASED_LOCATION, CURRENT_LOCATION, RECOMMENDED_POSTS } from "./config";
import HyperLink from "@/app/components/hyperlink";
import PostCard from "@/app/components/post-card";
import Divider from "@/app/components/divider";
import BlogPosts from "@/app/components/posts";

const ArrowSVG = () => {
  return (
    <svg
      width="58"
      height="76"
      viewBox="0 0 58 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.98626 2.12742C9.47855 3.09307 14.7914 10.9083 15.8737 12.5535C18.6438 16.7643 20.8502 23.9045 21.719 30.0836M21.719 30.0836C22.0411 32.3744 22.1794 34.5331 22.0943 36.3615C21.4064 51.15 3.66151 51.8568 2.03742 38.8697C1.4039 33.8037 8.12327 30.2265 12.2317 29.4916C15.3996 28.925 18.6401 29.2096 21.719 30.0836ZM21.719 30.0836C24.7109 30.9328 27.5502 32.3385 30.0223 34.0605C40.2663 41.1959 48.2073 60.0598 46.4031 72.4359M32.2816 62.5996C36.0204 65.2039 42.3621 72.3899 46.1879 73.7008C46.4456 73.7891 54.7244 60.4895 56.2395 58.3144"
        stroke="#4F8F4A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SmileSVG = () => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.86755 6.10742C5.44356 7.55209 7.93946 8.77221 9.81696 7.13469C10.4462 6.58591 10.641 5.86708 10.641 5.06915M1 3.38815V3.83312M11.7287 1.95436C11.7287 1.85034 11.6793 1.76174 11.6793 1.65771"
        stroke="#4F8F4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Page() {
  return (
    <section className="m-auto min-h-screen">
      <div className="flex flex-col gap-3">
        <h1>
          this is <strong className="text-green">kotakun.blog</strong>
        </h1>
        <p>
          hey, i&apos;m <HyperLink href="/about">kota (cody) enokida</HyperLink>
          . this is a blog where i ramble about the many thoughts that go
          through my brain. discourse, an open mind, and a bit of stupidity is
          embraced here.
        </p>
        <p>
          i&apos;m based in <span className="font-bold">{BASED_LOCATION}</span>,
          but i&apos;m currently in{" "}
          <span className="font-bold">{CURRENT_LOCATION}</span>. i update my{" "}
          <HyperLink href="/now">now</HyperLink> page every so often!
        </p>
        <p>
          i do web dev for work. if you&apos;re interested in that side of me,
          here&apos;s{" "}
          <HyperLink href="/projects">all the stuff i&apos;ve made</HyperLink>.
        </p>
        <p>
          welcome, and thank you for visiting to my corner of the{" "}
          <span className="relative">
            internet!
            <i className="absolute right-[-16px] top-0">
              <SmileSVG />
            </i>
          </span>
        </p>
      </div>
      <div className="px-2 py-6">
        <ArrowSVG />
      </div>
      <h2>i recommend reading...</h2>
      <div className="grid grid-cols-1 gap-4 pt-4">
        {RECOMMENDED_POSTS.map((post, i) => {
          return (
            <PostCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              id={post.slug}
              title={post.title}
              description={post.summary}
              thumbnailUrl={post.thumbnail}
              latest={i === 0}
            />
          );
        })}
      </div>
      <Divider />
      <h2>everything else i&apos;ve written so far</h2>
      <BlogPosts />
    </section>
  );
}
