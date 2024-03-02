"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({
  price,
  setPrice,
  handlePrice,
  setcheckedList,
}) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckList = async (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setcheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setcheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  },[]);

  return (
    <>
      <div className=" border-2 shadow-md shadow-black bg-gray-300 rounded-md m-5 h-auto py-10 px-3">
        <label htmlFor="price" className=" text-xl mr-3 font-bold">
          Price :{" "}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={1000}
          max={2500}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price ? price : 0}
        />
        <span className=" ml-10"> ₹ {price ? price : ""}</span>
        <div>
          <button
            className=" w-40 h-10 bg-green-400 hover:bg-green-500  cursor-pointer my-3"
            onClick={handlePrice}
            
          >
            Search
          </button>
        </div>
        <div className=" my-10 ">
          <h3 className=" text-xl font-bold my-3">Filter by Facilities : </h3>
          {list?.map((e) => {
            return (
              <p key={e} className="grid grid-cols-4 my-3">
                <label htmlFor="checkbox" className=" col-span-2">
                  {e}{" "}
                </label>
                <input
                  type="checkbox"
                  name="ckeckbox"
                  id="checkbox"
                  className=" w-5 h-5 ml-3 col-span-1"
                  value={e}
                  onChange={handleCheckList}
                />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;