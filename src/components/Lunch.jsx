import { Link } from "react-router-dom";

export const Lunch = () => {
  var image =
    "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2017/06/jivati-700x393.jpg";
  return (
    <Link to="/lunch">
      <div className="w-full h-36 justify-center flex mt-10">
        <div
          className=" bg-no-repeat w-96 h-full bg-cover rounded-2xl brightness-75"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="ml-10 mt-20 font-bold text-white text-3xl font-serif brightness-200">
            Lunch
          </p>
        </div>
      </div>
    </Link>
  );
};
