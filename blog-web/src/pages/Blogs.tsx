import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author.name}
          content={blog.content}
        />
      ))}
    </div>
  );
};

export default Blogs;
