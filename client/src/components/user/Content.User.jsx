import { useState } from "react";
import CardOrder from "./Card.Order";
import CardInfo from "./Card.Info";

export default function ContentUser() {
  const [iscard, setiscard] = useState(true);
  return (
    <div className="grid grid-cols-9 bg-gray-50 w-full h-max pb-5 mt-2 font-fontcuong font-semibold text-base">
      <div className="col-span-2 h-full  grid-rows-6 grid border rounded ">
        <div className="row-span-3  flex justify-center items-center ">
          <span
            onClick={() => {
              setiscard(true);
            }}
            className={`${
              iscard ? "bg-stone-300" : "bg-gray-50"
            } cursor-pointer hover:bg-stone-300 border rounded h-5/6 w-3/4 flex items-center justify-center`}
          >
            Đơn hàng đã đặt
          </span>
        </div>
        <div className="row-span-3  flex justify-center items-center ">
          <span
            onClick={() => {
              setiscard(false);
            }}
            className={`${
              iscard ? "bg-gray-50" : "bg-stone-300"
            } cursor-pointer hover:bg-stone-300 border rounded h-5/6 w-3/4 flex items-center justify-center`}
          >
            Quản lí tài khoản
          </span>
        </div>
      </div>
      {iscard ? (
        <CardOrder/>
      ) : (
        <CardInfo/>
      )}
    </div>
  );
}
