import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AuthContext";
import axios from "axios";

import { MenuData } from "./MenuData";
//import { getDefaultNormalizer } from "@testing-library/dom";

export const MenuItems = () => {
  const { handleToken } = useContext(AppContext);
  const [token, setToken] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getToken();

    //  getData();
  }, []);

  useEffect(() => {
    getCategory();
  }, [token]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(
      "https://demo-api.nasj.io/menus?category_id=610adf8c4ade7f3fcac26e19",
      {
        headers: {
          "x-auth-token": `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      console.log(data.data.data.items);
      setCategoryData(data.data.data.items);
    } catch (error) {
      console.log(error);
    }
    // <MenuData categoryData={categoryData}></MenuData>;
  };

  const handleClick = async (el) => {
    const data = await axios.get(
      `https://demo-api.nasj.io/menus?category_id=${el}`,
      {
        headers: {
          "x-auth-token": `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      //console.log(data.data.data.items);
      setCategoryData(data.data.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const getToken = async () => {
    try {
      const { data } = await axios.post(
        "https://demo-api.nasj.io/token/O72Ebw1ro3"
      );
      setToken(data.token);
      handleToken(data.token);
      console.log(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    const { data } = await axios.get("https://demo-api.nasj.io/categories", {
      headers: {
        "x-auth-token": `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    try {
      //console.log(data.data);
      setMenuData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="h-40 mt-20 mb-5 overflow-x-scroll overflow-y-hidden m-auto flex flex-row  max-w-md">
        {menuData &&
          menuData.map((e) => {
            return (
              <div
                className=" h-20 flex-shrink-0 p-2 mx-4 my-2 w-20 flex flex-col place-items-center text-center "
                onClick={() => {
                  handleClick(e.id);
                }}
                key={e.id}
              >
                <img
                  className="w-20  rounded-xl  p-4 h-20 bgColor cursor-pointer"
                  src={e.icon}
                  alt="MenuItem"
                />
                <p className="text-sm font-light">{e.name}</p>
              </div>
            );
          })}
      </div>
      <div className="flex w-1/4 mx-auto justify-between text-gray-700 font-medium ">
        <p>items</p>
        <p>({categoryData.length})</p>
      </div>
      <hr className="w-1/4 mt-5 mx-auto text-gray-800" />
      <MenuData categoryData={categoryData} token={token}></MenuData>
    </div>
  );
};
