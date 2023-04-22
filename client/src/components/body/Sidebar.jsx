// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiFillHeart,AiOutlineDollarCircle } from "react-icons/ai";
export default function Sidebar() {
  return (
    <div className="h-full w-1/6  mt-2 font-fontcuong pl-6 border-zinc-300 border hidden lg:block">
      <span className="font-bold">Lọc sản phẩm:</span>
      <div className="flex gap-1 mt-2">
        <AiFillHeart className="mt-1 text-red-800"></AiFillHeart>
        <span>Thể loại:</span>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="money" />
        <label> Áo Polo </label>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="money" />
        <label> Áo Polo </label>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="money" />
        <label> Áo Polo </label>
      </div>
      <div className="flex gap-1 mt-2">
        <AiOutlineDollarCircle className="mt-1 text-green-800"></AiOutlineDollarCircle>
        <span>Giá tiền:</span>
      </div>
      <div className="flex gap-2  text-sm">
        <input type="radio" name="gender" />
        <label>50.000 đến 100.000 </label>
      </div>
      <div className="flex gap-2 text-sm mt-4">
        <input type="radio" name="gender" />
        <label>100.000 đến 500.000 </label>
      </div>
      <div className="flex gap-2 text-sm mt-4">
        <input type="radio" name="gender" />
        <label>500.000 đến 100.000 </label>
      </div>
    </div>
  );
}
