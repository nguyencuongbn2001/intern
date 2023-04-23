import React from "react";
import Nameproduct from "./Name.product";
import Imageproduct from "./Image.product";
import Detailproduct from "./Detail.product";

export default function Contentbody(props) {
  return (
    <div className="lg:flex mt-4 block">
      <div>
        <Nameproduct />
        <Imageproduct />
      </div>
      <div className="lg:grid lg:grid-cols-6 w-full">
        <div className="col-span-4">
          <Detailproduct />
        </div>
        <div className="lg:col-span-2 lg:flex lg:items-end lg:col-end-7">
          <div className="flex font-fontcuong lg:ml-[-200px]">
            <div className="font-fontcuong text-2xl font-medium ">Giá tiền:</div>
            <span className="text-xl">{}</span>
          </div>
          <div
            className="rounded hover:bg-yellow-600
      cursor-pointer  
      bg-slate-500 
      w-32 
      h-12 
      flex 
      items-center 
      justify-center 
      text-white
      font-fontcuong
      text-sm 
      lg:ml-60
      ml-32 mt-6"
          >
            Thêm giỏ hàng
          </div>
        </div>
      </div>
    </div>
  );
}
