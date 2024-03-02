"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 border-gray-400 rounded-md px-5 py-2">
      <div className="flex  items-center">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full mr-5"
        />
        <div className="">
          <p className="font-bold text-xl">Get access to exclusive deals</p>
          <p className="text-gray-600 ">Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex">
        <input
          type="email"
          className="px-6 py-3  rounded-lg outline-none border-2 mr-5 w-64  placeholder-gray-500 border-gray-400"
          placeholder="e.g.,john@gmail.com"
        />
        <button className="bg-red-500 px-6 py-3 w-40  rounded-lg text-white" type="submit">Notify me</button>
      </div>
    </div>
  );
};   

export default Header4;
