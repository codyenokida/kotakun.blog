import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-center w-[84px] h-[84px] mx-auto">
        <Image
          src="/logos/logo-about.gif"
          width={84}
          height={84}
          alt="logo emoji"
          unoptimized
          priority
        />
      </div>
      {children}
    </>
  );
}
