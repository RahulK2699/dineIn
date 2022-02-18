export const MealType = ({ image, mealtype }) => {
  return (
    <div className="w-full h-36 justify-center flex mt-10">
      <div
        className=" bg-no-repeat w-96 h-full bg-cover rounded-2xl brightness-90"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="ml-10 mt-20 font-bold text-white text-3xl font-serif brightness-125">
          {mealtype}
        </p>
      </div>
    </div>
  );
};
