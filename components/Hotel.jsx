import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hotel = ({e}) => {
  
  return (
    <div className="p-4 mb-2 border-2 bg-gray-200   h-100 w-full">
      <div className="flex items-center">
        <Image
          src={e?.banner}
          width={200}
          alt="hotel"
          height={200}
          className="w-96 h-large-box mr-3 mb-2"
        />
        <div className="grid grid-rows-3 ">
          {
            e ?e.gallery.map((e)=>{
              return(

                <Image
                key = {e}
                  src={e}
                  width={200}
                  alt="hotel"
                  height={200}
                  className="w-32  mb-2 "
                />
              )
            }) : ""
          }

        </div>
        <div className="ml-10">
          <h2 className="font-bold text-2xl line-clamp-1">
            {e.name}
          </h2>
          <p className="text-justify my-5 text-lg">
            {e.description}
          </p>
          <div className="text-2xl my-5">
            <span className="font-bold">Facilities: </span>
         
            <ul className="">
              {
                e ? e.facilities?.map((e)=>{ //optional chaininss
                  return(
                      <li className="flex items-center mr-10 mb-3" key={e.name}>
                        <span className="">
                          <Image
                          src={e.img}
                          width={200}
                          height={200}
                          alt="hotel"
                          className="w-10 h-10"
                          />

                        </span>
                        <span className="m-2">{e.name}</span>
                      </li>
                  )
                }) : ""
              }
              </ul>

          </div>
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 font-bold text-lg hover:bg-blue-500">
            Price: &#8377; {e.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="text-lg font-bold underline ml-10 text-red-600 hover:text-red-700 "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
