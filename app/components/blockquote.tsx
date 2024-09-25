type BlockQuoteProps = {
  type: "danger" | "neutral";
  children: React.ReactNode;
};

export default function BlockQuote({
  type = "neutral",
  children,
}: BlockQuoteProps) {
  return (
    <div
      className={`relative h-fit rounded-md bg-green-faded p-3 mt-[4px] ${
        type === "neutral" ? "text-neutral-800" : "text-red-500"
      }`}
    >
      <div className="absolute top-[-8px] left-[-8px] w-8 h-8 bg-green rounded-full flex items-center justify-center border-[3px] border-white">
        <span className="text-sm text-white pointer-events-none">i</span>
      </div>
      <div className="m-0 p-0 pl-5">{children}</div>
    </div>
  );
}
