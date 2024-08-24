import Link from "next/link";

type HyperLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function HyperLink({ href, children }: HyperLinkProps) {
  return (
    <Link href={href} className="hyperlink">
      {children}
    </Link>
  );
}
