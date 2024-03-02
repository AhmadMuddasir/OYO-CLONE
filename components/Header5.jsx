import Image from "next/image";
import React from "react";

const Header5 = () => {
  const countries = [
    "Indonesia",
    "Malaysia",
    "Denmark",
    "Netherlands",
    "UK",
    "US",
  ];
  return (
    <div className="flex my-4">
      <Image
        src={"/map.avif"}
        width={100}
        height={100}
        alt="img"
        className="w-1/2 mx-8 "
      />

      <div>
        <div>
          <h2 className="font-bold text-3xl mb-4">
            There's an OYO around Always.
          </h2>
          <p className="text-gray-500">
            More Destinations. More Ease. More Affordable.
          </p>
        </div>
        <div className="flex my-8">
          <div className="flex flex-col">
            <p className="text-4xl font-medium"> 35+</p>
            <p className="text-sm text-gray-400">countries</p>
          </div>
          <div className="">
            <p className="text-4xl text-gray-400 font-thin mx-4">/</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">174,000+</p>
            <p className="text-sm text-gray-400">Hotels & Homes</p>
          </div>
        </div>
        <div className="grid grid-cols-6 w-full m-auto">
          {countries.map((e) => (
          
              <li key={e} className="font-medium text-lg col-span-3 m-4 w-40 ">{e}</li>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header5;
