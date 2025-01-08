import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      setBlogs(response.data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return { blogs, loading };
};

export const useBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog>({
    id: "string",
    title: "string",
    content: "string",
    author: {
      name: "string",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      setBlog(response.data);
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  return { blog, loading };
};

export const getUserName = (token: string) => {
  const userName = token.split(" ")[1];
  return userName;
};