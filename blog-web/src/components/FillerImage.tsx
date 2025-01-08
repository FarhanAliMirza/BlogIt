import blog from "../assets/blog.png";

const FillerImage = () => {
  return (
    <div className="h-screen bg-[#3f93bf] flex flex-col justify-center">
      <img src={blog} alt="blog" className="" />
    </div>
  );
};

export default FillerImage;
