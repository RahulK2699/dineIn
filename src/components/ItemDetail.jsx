import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AuthContext";

export const ItemDetail = () => {
  const [data, setData] = useState({});
  const [remainingData, setRemainingData] = useState([]);
  const { token } = useContext(AppContext);
  //console.log(token);
  let { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(
      "https://demo-api.nasj.io/menus/610ae26c4ade7f3fcac26e36",
      {
        headers: {
          "x-auth-token": `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      setData(data.data.data);
      setRemainingData(data.data.data.related);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {
        <div>
          <div className="w-full">
            <img
              className="w-1/4  mx-auto mt-4 rounded-xl"
              src={data.image}
              alt="ItemDetail"
            />
            <div className="w-1/4 mx-auto mt-4 tracking-wider text-lg text-gray-400 font-semibold flex justify-between ">
              <p>{data.name}</p>
              <p>Rs. ({data.price})</p>
            </div>

            <p className="text-md  mt-2 w-1/4 mx-auto justify-start font-light text-gray-700">
              {data.time}
            </p>
            <hr className="w-1/4 mx-auto my-6 mt-5 " />
          </div>
          <p className="font-bold text-md m-5 mx-auto  w-1/4 justify-start">
            Recommended
          </p>
          {remainingData.map((e) => (
            <div className=" w-full">
              <div className="w-1/4 mx-auto my-5 flex border-2 border-gray-300">
                <img
                  className="w-20 h-20 rounded-md  object-cover m-2"
                  src={e.image}
                  alt="RItemDetail"
                />
                <img
                  className="w-5 h-5 object-cover brightness-150 mt-5"
                  src="https://www.kindpng.com/picc/m/151-1515163_100-veg-logo-png-transparent-png.png"
                  alt="veg"
                />
                <div className="flex justify-between w-72 mt-5 ml-2 tracking-wider text-gray-500 font-bold">
                  <p>{e.name}</p>
                  <p>Rs.{e.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  );
};
