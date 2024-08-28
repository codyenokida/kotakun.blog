import AboutImages from "@/app/components/about-images";
import BackButton from "@/app/components/back-button";
import HyperLink from "@/app/components/hyperlink";
import { BASED_LOCATION } from "@/app/config";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <BackButton />
      <h1 className="title font-semibold text-4xl tracking-tighter">
        my foot print on the internet
      </h1>
      <div className="prose mt-10">
        <h2>🚧 Work in progress... 🚧</h2>
        <p>
          I&apos;m still thinking of a great design to showcase all the stuff
          that I&apos;ve built in the past. In the meantime, check out my{" "}
          <HyperLink href="https://codyenokida.com">old portfolio</HyperLink>!
        </p>
      </div>
    </section>
  );
}
