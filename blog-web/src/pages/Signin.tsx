import FillerImage from "../components/FillerImage";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-screen flex flex-col justify-center"> 
          <AuthForm title="Sign In" />
          <p className="text-center text-sm/6 font-medium text-gray-500 z-20">
            Don't have an account?{" "}
            <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </p>
        </div>
        <div className="invisible lg:visible">
          <FillerImage />
        </div>
      </div>
    </>
  );
};

export default SignIn;
