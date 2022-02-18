export const Input = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <input
        className="w-96
                    rounded-md 
                    pt-1.5 
                    pb-1.5 
                  border-indigo-900 
                    border 
                    mb-10
                    justify-center placeholder:text-indigo-900 font-serif px-10"
        type="text"
        placeholder="Search for the food item"
      />
    </div>
  );
};
