import Navbar from "./Navbar";

const BlogSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="grid grid-cols-12 px-10 pt-8 w-full gap-8 animate-pulse">
        <div className="col-span-10 flex-row gap-5 items-center justify-center">
          <div className="h-6 bg-gray-200 rounded-full mb-2.5 max-w-[800px]"></div>
          <div className="flex items-center justify-center bg-gray-300 h-[1px] rounded-lg my-3"></div>
          <div className="flex-row items-center justify-start font-normal text-gray-800 text-lg">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[830px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[830px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[830px] mb-2.5"></div>
          </div>
        </div>
        <div className="col-span-2 flex gap-5 items-start justify-start">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-end">
              <div
                className={
                  "items-center justify-center  overflow-hidden bg-gray-300 rounded-full w-12 h-12"
                }
              ></div>
            </div>
            <div className="flex items-center justify-center">
            <div className="h-2 bg-gray-200 rounded-full min-w-[80px] mb-2.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
