import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("token") !== null
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">
          BlogIt
        </a>
        {isLoggedIn ? (
          <nav>
            <button
              onClick={() => navigate("/create")}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-cyan-300 hover:bg-gradient-to-br focus:ring-1 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Blog
            </button>

            <button onClick={handleLogout} className="mx-5 text-blue-500">
              SignOut
            </button>
            <Avatar name="Fam" size="large" />
          </nav>
        ) : (
          <nav>
            <a href="/signin" className="mr-4">
              Sign In
            </a>
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
