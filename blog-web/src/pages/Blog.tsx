import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Avatar } from "../components/BlogCard";
import Navbar from "../components/Navbar";
import BlogSkeleton from "../components/BlogSkeleton";

const Blog = () => {
    const { id } = useParams();
  const { blog, loading } = useBlog(id as string);
  console.log(blog);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="grid grid-cols-12 px-10 pt-8 w-full gap-8">
        <div className="col-span-10 flex-row gap-5 items-center justify-center">
        <div className="flex items-center justify-start font-bold text-4xl">
            {blog.title}
        </div>
        <div className="flex items-center justify-center bg-gray-300 h-[1px] rounded-lg my-3"></div>
        <div className="flex items-center justify-start font-normal text-gray-800 text-lg">
            {blog.content}
        </div>
      </div>
        <div className="col-span-2 flex gap-5 items-start justify-start">
            <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-end">
                    <Avatar name={blog.author.name} size="large" />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-gray-700 text-md font-thin">by <span className="text-gray-800 font-medium">{blog.author.name}</span></p>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
