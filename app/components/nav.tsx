import Link from "next/link";
import Image from "next/image";
import HyperLink from "./hyperlink";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <nav className="flex gap-4 mb-16">
      <HyperLink href="/">home</HyperLink>
      <HyperLink href="/about">about</HyperLink>
      <HyperLink href="/now">now</HyperLink>
      <HyperLink href="/projects">projects</HyperLink>
    </nav>
  );
}
