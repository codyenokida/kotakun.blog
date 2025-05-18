import { getLatestPostMetadata, getPostMetadataBySlug } from "./blog/utils";

// top four posts to recommend to users
export const RECOMMENDED_POSTS = [
  getLatestPostMetadata(),
  getPostMetadataBySlug("vietnam-three"),
  getPostMetadataBySlug("too-many-blogs"),
  getPostMetadataBySlug("taiwan-update"),
];

export const PROJECTS: Project[] = [
  {
    name: "Cody's Chip Catalogue",
    description:
      "The internet's most comprehensive catalogue of chips. Designed, architected, and built by Cody (me).",
    url: "https://www.codyschips.xyz/",
    image: "/projects/codyschips-project.png",
    thumbnail: "/projects/codyschips-project.png",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Figma", "Supabase"],
    logo: "/projects/codyschips-logo.png",
  },
  {
    name: "C3.ai",
    description:
      "Enterprise AI software for digital transformation. I contributed to the UI framework, improving the design system, data visualization, and components library.",
    url: "https://c3.ai",
    image: "/projects/c3ai-project.png",
    thumbnail: "/projects/c3ai-project.png",
    tags: [
      "React",
      "SCSS",
      "Storybook",
      "TypeScript",
      "Apache ECharts",
      "Jenkins",
    ],
    logo: "/projects/c3ai-logo.png",
  },
  {
    name: "kotakun.blog (this website)",
    description:
      "A personal blog that includes some travel stories and thoughts. This also happens to be my web portfolio.",
    url: "https://kotakun.blog",
    image: "/projects/kotakun-project.png",
    thumbnail: "/projects/kotakun-project.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "MDX"],
    logo: "/projects/kotakun-logo.png",
    github: "https://github.com/codyenokida/kotakun.blog",
  },
  {
    name: "AirSwap",
    description:
      "The original P2P trading protocol on Ethereum. RFQ DEX frontend built by a team of open-source contributors.",
    url: "https://airswap.io",
    image: "/projects/airswap-project.png",
    thumbnail: "/projects/airswap-project.png",
    tags: ["React", "Ethereum", "web3.js", "ethers.js"],
    logo: "/projects/airswap-logo.png",
    github: "https://github.com/airswap/airswap-web",
  },
  {
    name: "ZipTips (formerly SwiftTips)",
    description:
      "A earn and learn platform for developers to learn about the Swift programming language (iOS). I designed and developed the web product for the platform.",
    url: "https://www.swifttips.co/",
    image: "/projects/swift-tips-project.png",
    thumbnail: "/projects/swift-tips-project.png",
    tags: ["React", "GSAP", "Node.js", "MongoDB", "OAuth", "AWS Lambda"],
    logo: "/projects/swift-tips-logo.png",
  },
];
