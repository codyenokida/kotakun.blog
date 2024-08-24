type BlockQuoteProps = {
  type: "danger" | "neutral";
  children: React.ReactNode;
};

export default function BlockQuote({
  type = "neutral",
  children,
}: BlockQuoteProps) {
  return (
    <blockquote
      className={`grid grid-cols-[8px_1fr] rounded-md gap-3 bg-green-faded pr-3 ${
        type === "neutral" ? "text-neutral-800" : "text-red-500"
      }`}
    >
      <div
        className={`w-2 h-full rounded-l-md ${
          type === "neutral" ? "bg-green" : "bg-red-500"
        }`}
      />
      <div className="py-1">{children}</div>
    </blockquote>
  );
}
