import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import { CustomMDX } from "@/app/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "../../sitemap";
import BackButton from "@/app/components/back-button";
import Divider from "@/app/components/divider";

const Comments = dynamic(() => import("@/app/components/comments"), {
  ssr: false,
});

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Kota Cody Enokida",
              name: "kotakun.blog",
            },
          }),
        }}
      />
      <BackButton />
      <h1 className="title font-semibold text-4xl tracking-tight">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-md text-neutral-600">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose flex flex-col">
        <CustomMDX source={post.content} />
      </article>
      <Divider />
      <Comments slug={params.slug} />
    </section>
  );
}
