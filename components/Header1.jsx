'use client'
import Image from "next/image";
import Link from "next/link";
import Block from "./Block";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Header1 = () => {
  
  const [auth,setAuth] =  useState(false);

  useEffect(()=>{
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
    }

  },[auth])
  const router = useRouter();

  const handleLogout = ()=>{
    Cookies.remove('user');
    setAuth(false);
    router.push("/");
  }


  return (
    <div className="flex  justify-between border-b-2 border-gray-300  items-center h-24 px-10 ">
      <Image
        priority={true}
        src={"/logo.png"}
        alt="logo"
        width={100}
        height={100}
        className="w-28 h-28"
      />
      <div className="h-full  flex">
        {/* props are parameter which we used send the data from parent to child component */}
        <Block
          images={"member.svg"}
          title={"Become a member"}
          para={"Additional 10% off on stays"}
        />
        <Block
          images={"property.svg"}
          title={"OYO for business "}
          para={"trusted by 5000 corporates"}
        />
        <Block
          images={"bag.svg"}
          title={"List your property"}
          para={"start earning in 30 min."}
        />
        <Block
          images={"phone.svg"}
          title={"0214-6201911"}
          para={"call us to book now"}
        />

        <div className="flex cursor-pointer hover:text-gray-600 items-center  px-2">
          <Image
            src={"/login.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10   mr-5"
          />
          {auth ? (
              <h3 className="font-bold text-xl" onClick={handleLogout}>Logout</h3>

          ) : (
            <Link className="flex items-center" href={"/login"}>
              <h3 className="font-bold">Login/Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;


