import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  author,
  content,
}: {
  id : string;
  title: string;
  author: string;
  content: string;
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded mt-6">
        <Link to={`/blog/${id}`}>
        <div className="flex items-center mb-6 gap-4">
          <Avatar name={author} size="small" />
          <p className="text-gray-500 text-sm">by {author}</p>
        </div>
        <h1 className="text-4xl font-bold mb-4 line-clamp-1">{title}</h1>
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p className="line-clamp-3">{content}</p>
        </div>
    </Link>
      </div>
  );
};

export const Avatar = ({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "large";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-600 rounded-full ${
        size == "small" ? "w-8 h-8" : "w-12 h-12"
      }`}
    >
      <span
        className={`${
          size == "small" ? "font-light" : "font-medium"
        } text-gray-300`}
      >
        {name.charAt(0)}
      </span>
    </div>
  );
};

export default BlogCard;
