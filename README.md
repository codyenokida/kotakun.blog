# kotakun.blog

![kotakun.blog](/public/projects/kotakun-project.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It was inspired by [Vercel's Portfolio Blog Starter](https://github.com/vercel/examples/tree/main/solutions/blog), however, **kotakun.blog** is built with Next.js 14 and Tailwind CSS 3, instead of Next.js 15 (canary) and Tailwind CSS 4 (alpha) due to instability with the os architecture between packages.

Includes:

- Next.js 14 (App Router)
- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Tailwind v3
- Firebase (Comments)
- Resend (Comments and Newsletter)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Post Creation

Posts are written in Markdown (**MDX**) and stored in the `blog/posts` directory. The blog uses Next.js's dynamic routing to fetch the posts from the `blog/posts` directory.

To create a new post, create a new file in the `blog/posts` directory. The file name should be the title of the post. The file should be in the following format:

```js
---
title: "Example Post"
publishedAt: "2024-07-04"
summary: "This is an example post."
thumbnail: "/posts/example/thumbnail.jpeg"
logo: "/logos/logo-example.gif"
---
```

If you want to add images to your post, you can add them to the `public/posts/example` directory, and then use the `ImageFormatter` component to display the images. Both landscape and portrait images are supported.

```js
<ImageFormatter
  imageSources={[
    {
      type: "landscape", // or "portrait"
      src: "/posts/example/image.jpeg",
      alt: "Example image",
      caption: "Example image",
    },
    {
      type: "landscape",
      src: "/posts/example/image2.jpeg",
      alt: "Example image",
      caption: "Example image",
    },
  ]}
/>
```

## Custom Logos

<div style="display: flex; justify-content: space-around; align-items: center;">

  <img src="./public/logos/logo.gif" alt="Custom Logo" width="200" />
  <img src="./public/logos/logo-project.webp" alt="Project Logo" width="200" />
</div>

If you want to use custom logos, you can add them to the `public/logos` directory. The logos will be displayed in the header of the blog.

`public/logos/logos.gif` will be used as the default logo if no logo is provided. Each post will also have a `logo` property in the metadata. If no logo is provided, the default logo will be used.

## Comments (GCP Firebase)

Create a new project in [Firebase](https://firebase.google.com/) and add the credentials to the `.env` file. Documents (Comments) are created dynamically on submit and stored in Firebase. Make sure to enable Firestore in the Firebase project and correctly configure permissions in the Firebase console.

```.env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Comments and Newsletter (Resend)

Create a new project in [Resend](https://resend.com/) and add the credentials to the `.env` file. Emails are sent using Resend.

```.env
RESEND_API_KEY=
```

## Deployment

This project is deployed on Vercel. The `main` branch is automatically deployed to production.
