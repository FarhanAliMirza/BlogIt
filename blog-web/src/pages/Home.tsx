import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundLines } from "../components/ui/background-lines";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/blogs");
    }
  }, []);

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="text-3xl font-bold mb-4">Welcome to the BlogIt</h2>
        <p className="text-gray-700">
          Discover the latest stories from our community.
        </p>
        <div className="p-6 z-50">
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignIn
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            SignUp
          </button>
        </div>
    </BackgroundLines>
  );
};

export default Home;
