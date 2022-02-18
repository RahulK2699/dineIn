import { Link } from "react-router-dom";

export const Dinner = () => {
  var image =
    "https://5.imimg.com/data5/DY/HF/GLADMIN-32993231/chhole-bhature-250x250.png";
  return (
    <Link to="/dinner">
      <div className="w-full h-36 justify-center flex mt-10">
        <div
          className=" bg-no-repeat w-96 h-full bg-cover rounded-2xl brightness-90"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="ml-10 mt-20 font-bold text-white text-3xl font-serif brightness-125">
            Dinner
          </p>
        </div>
      </div>
    </Link>
  );
};
