import { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AuthContext";

export const Input = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let { token, len, handleLength } = useContext(AppContext);
  //console.log(token);
  const getSearchData = async (e) => {
    setSearch(e.target.value);
    handleLength(e.target.value.length);
    const data = await axios.get(
      `https://demo-api.nasj.io/search?term=${search}`,
      {
        headers: {
          "x-auth-token": `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      setData(data.data.data.items);
      console.log(data.data.data.items);
    } catch (error) {
      console.log(error);
    }
    //return data;
  };
  return (
    <div>
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
          onChange={getSearchData}
        />
      </div>
      <hr className=" w-96 mx-auto mb-2" />
      <div className="flex justify-between mx-auto w-96">
        <p>Items</p>
        <p>({data.length})</p>
      </div>
      <hr className="w-96 mx-auto mt-2 mb-10" />
      <div>
        {data.map((e) => (
          <div className="w-full mb-8">
            <img
              className="w-96 h-40 object-cover rounded-2xl mx-auto "
              src={e.image}
              alt="MenuSearchImage"
            />
            <div className="w-96 mx-auto mt-5 flex">
              <img
                className="w-5 h-5 object-cover brightness-125"
                src="https://www.kindpng.com/picc/m/151-1515163_100-veg-logo-png-transparent-png.png"
                alt="vegLogo"
              />
              <div className="flex w-96 justify-between ml-2 text-gray-700 font-semibold">
                <p>{e.name}</p>
                <p>({e.price})</p>
              </div>
            </div>
            <p className="w-96 mx-auto font-light text-gray-800 pl-6 mt-2">
              {e.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
