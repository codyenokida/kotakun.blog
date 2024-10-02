// Loading skeleton for comments
const LoadingCommentSkeleton = () => {
  return (
    <div className="space-y-2 my-6">
      {[...Array(3)].map((_, i) => (
        <article key={i} className="py-2 rounded-lg animate-pulse">
          <h4 className="font-semibold">
            <div className="inline-block h-4 w-24 bg-green-faded rounded"></div>
            <span className="text-green mx-1">•</span>
            <span className="text-gray-500 text-sm">
              <div className="inline-block h-4 w-32 bg-green-faded rounded"></div>
            </span>
          </h4>
          <div className="mt-2 space-y-2">
            <div className="h-4 w-full bg-green-faded rounded"></div>
            <div className="h-4 w-5/6 bg-green-faded rounded"></div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default LoadingCommentSkeleton;
