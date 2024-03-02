"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex flex-row md:flex-col  h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className=" absolute w-full top-10 px-4 flex items-center text-black">
          <h2 className="text-5xl font-extrabold mr-5">OYO</h2>
          <p className=" font-bold text-2xl ">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-9/12">
          <div className="md:my-1 my-8 text-black">
            <p className=" font-bold text-5xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-2xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="md:my-1 my-8 ml-20 pb-40 w-10/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-400 to bg-red-600 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className=" px-10">
              <h3 className=" text-5xl font-bold my-2">Login / Signup</h3>
              <p className=" font-bold text-lg mb-1">
                Please enter your phone number to continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="md:w-96  outline-none border my-3 border-black px-3 py-1 w-60 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className="md:w-96  outline-none border my-3 border-black px-3 py-1 w-60 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter yourt password..."
                className="md:w-96  outline-none border my-3 border-black px-3 py-1 w-60 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login " : " Sign Up"}
              </button>
              <p className=" my-1 text-xl">
                <span>
                  {login
                    ? "Don`t have an account ?"
                    : "Already have an account ?"}
                </span>
                <span
                  className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {" "}
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
