import React from "react";
import Infoproduct from "./Info.product";

export default function Contentcard() {
  return (
    <div>
      <div className="border-2 border-cyan-700 w-full h-max">
        <span className="font-fontcuong text-xl ">Thông tin:</span>
        <div className="flex justify-center">
          <Infoproduct />
        </div>
        <div className="flex justify-end items-center mt-2 mb-2 mr-2">
          <span className="mr-48 font-fontcuong text-2xl font-medium ">Thành tiền:</span>
          <div className="rounded p-4 w-32 flex items-center justify-center bg-red-700 cursor-pointer text-xl font-fontcuong
          text-white">Đặt hàng</div>
        </div>
      </div>
    </div>
  );
}
