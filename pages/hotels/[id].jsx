"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth,setAuth] = useState(false);

  useEffect(()=>{
    const cookie = Cookies.get("user");
    if(cookie){
      setAuth(true);
      return;
    }
    setAuth(false);
  },[]);


  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className="w-7/12 mx-auto my-8">
        <Image
          src={hotel?.banner}
          priority
          alt="hotel"
          width={2000}
          height={2000}
          className="w-full h-large-box my-5 mx-auto"
        />
        <div className=" ">
          <h3 className="text-3xl font-bold">{hotel?.name}</h3>
          <p className=" text-lg">{hotel?.description}</p>
          <button className=" h-10 rounded-lg  font-extrabold text-2xl  my-4">
            Price: ₹ <span className="ml-2">{hotel?.price}</span>
          </button>
          <p className="text-3xl font-bold my-2">Facilities</p>
          <ul className="flex ">
            {hotel
              ? hotel.facilities?.map((e) => {
                  //optional chaininss
                  return (
                    <li className="flex items-center mr-10 mb-3" key={e.name}>
                      <span className="">
                        <Image
                          alt="img"
                          src={e.img}
                          width={200}
                          height={200}
                          className="w-10 h-10"
                        />
                      </span>
                      <span className="m-2">{e.name}</span>
                    </li>
                  );
                })
              : ""}
          </ul>
          {auth ? (
            <Link href={`/payment/${hotel._id}`}>            
            <button className="w-60 h-10 rounded-lg bg-red-400 font-bold text-lg hover:bg-red-500 my-4">
              Book Now
            </button>
            </Link>
          ) : (
            <span className="p-1 h-10 rounded-lg  font-bold text-2xl  ">
              Please <Link className="underline text-blue-600" href={`/login`}>Login</Link> to book hotels
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
