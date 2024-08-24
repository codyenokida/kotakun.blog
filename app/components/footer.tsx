import Divider from "./divider";
import HyperLink from "./hyperlink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-6">
      <Divider />
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/logo.svg" width={40} height={34} alt="logo emoji" />
        <nav className="flex gap-4">
          <HyperLink href="/">home</HyperLink>
          <HyperLink href="/about">about</HyperLink>
          <HyperLink href="/now">now</HyperLink>
          <HyperLink href="/projects">projects</HyperLink>
        </nav>
        <nav className="flex gap-4">
          <HyperLink href="https://github.com/codyenokida">github</HyperLink>
          <HyperLink href="https://www.linkedin.com/in/codyenokida/">
            linkedin
          </HyperLink>
          <HyperLink href="https://x.com/hammockman3000">twitter</HyperLink>
        </nav>
        <p className="text-gray-400 text-sm">
          {new Date().getFullYear()} kotakun.blog
        </p>
      </div>
    </footer>
  );
};

export default Footer;
