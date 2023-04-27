// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import ShowLogin from "./ShowLogin";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import logologin from "../../assets/placeholder.jpg";
export default function Shopping() {
  const { setopencardlogin, islogin,setislogin } = useContext(MyContext);
  const navigate = useNavigate();
  if(localStorage.getItem('token')){
      setislogin(true)
  }
  const opencart = ()=>{
    if(localStorage.getItem('token'))
    {
      navigate(`/card`);
    }else{
      setopencardlogin(true)
    } 
  }
  return (
    <div className="flex w-full gap-4">
      <div className="relative w-1/3  h-full hidden lg:block">
        <AiOutlineShoppingCart
          className="h-10 w-full text-gray-500 cursor-pointer"
          onClick={opencart}
        />
        <span className="rounded-full font-bold text-lg h-6 w-7 flex items-center justify-center absolute left-8 bottom-6 bg-pink-700 text-white">
          10
        </span>
      </div>
      {islogin ? (
        <div
          style={{ backgroundImage: `url(${logologin})` }}
          className=" group lg:w-10 lg:h-10 ml-5 bg-contain bg-no-repeat w-20px h-20px relative"
        > <span className="absolute left-12 top-3 hidden lg:block">User</span>
          <div className="absolute left-5 top-10 ">
            <div className="font-fontcuong text-base font-semibold cursor-pointer bg-slate-100 hidden group-hover:block  hover:bg-slate-200 border rounded px-4 py-2">
              Accout
            </div>
            <div onClick={()=>{setislogin(false);localStorage.removeItem('token')}} className="font-fontcuong text-base font-semibold cursor-pointer bg-slate-100 hidden group-hover:block  hover:bg-slate-200 border rounded px-4 py-2">
              Logout
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-1/3 "
          onClick={() => {
            setopencardlogin(true);
          }}
        >
          <ShowLogin />
        </div>
      )}
      <FcMenu className="items-end justify-end h-10 w-10 text-gray-500 cursor-pointer hidden max-lg:block ml-12" />
    </div>
  );
}
