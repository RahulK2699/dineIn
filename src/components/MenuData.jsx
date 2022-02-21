import { NavLink } from "react-router-dom";
//import { ItemDetail } from "./ItemDetail";

export const MenuData = ({ categoryData, token }) => {
  return (
    <>
      {categoryData.length > 0 ? (
        <div>
          {categoryData.map((e) => {
            return (
              <div key={e._id} className="w-full ">
                <div className="w-96 mx-auto">
                  <NavLink to={`/breakfast/${e._id}`}>
                    <img
                      className="w-96 rounded-3xl h-40 object-cover mx-auto mt-5"
                      src={e.image}
                      alt="MenuData"
                    />
                  </NavLink>
                </div>
                <div className="w-96 mx-auto mt-2 flex justify-between text-lg font-semibold tracking-wider text-gray-400">
                  <p>{e.name}</p>
                  <p>Rs. {e.price}</p>
                </div>
                <p className="w-96 flex justify-start mx-auto mt-2 font-thin tracking-wide">
                  {e.time}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full">
          <img
            className="w-96 mx-auto mt-10"
            src="https://darling-residency.scube.me/assets/icon/no-item.svg"
            alt="pagenotfound"
          />
        </div>
      )}
    </>
  );
};
