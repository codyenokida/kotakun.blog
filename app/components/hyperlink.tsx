import Link from "next/link";

type HyperLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function HyperLink({ href, children }: HyperLinkProps) {
  const isExternalLink = !href.startsWith("/");

  return (
    <Link
      href={href}
      className="hyperlink leading-4"
      {...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}
