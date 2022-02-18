import { Link } from "react-router-dom";
export const Breakfast = () => {
  var image = "https://wallpaperaccess.com/full/4883007.jpg";

  return (
    <Link to="/breakfast">
      <div className="w-full h-36 justify-center flex mt-10">
        <div
          className=" bg-no-repeat w-96 h-full bg-cover rounded-2xl brightness-90"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="ml-10 mt-20 font-bold text-white text-3xl font-serif brightness-125">
            Breakfast
          </p>
        </div>
      </div>
    </Link>
  );
};
