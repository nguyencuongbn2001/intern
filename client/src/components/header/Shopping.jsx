// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import ShowLogin from "./ShowLogin";
export default function Shopping() {
  return (
    <div className="flex w-full gap-4">
      <div className="relative w-1/3  h-full hidden lg:block">
        <AiOutlineShoppingCart className="h-10 w-full text-gray-500 cursor-pointer" />
        <span className="rounded-full font-bold text-lg h-6 w-7 flex items-center justify-center absolute left-8 bottom-6 bg-pink-700 text-white">
          10
        </span>
      </div>
      <div className="w-1/3 ">
      <ShowLogin />

      </div>
      <FcMenu className="items-end justify-end h-10 w-10 text-gray-500 cursor-pointer hidden max-lg:block ml-12" />
    </div>
  );
}
