const BlogCardSkeleton = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded mt-6 animate-pulse">
        <div className="flex items-center gap-4 mb-5">
          <div
            className={
              "relative inline-flex items-center justify-center  overflow-hidden bg-gray-300 rounded-full w-8 h-8"
            }
          ></div>
          <div className="h-2 bg-gray-200 rounded-full min-w-[100px] mb-2.5 mt-2"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="text-gray-800 leading-relaxed space-y-4">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
