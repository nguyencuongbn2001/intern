// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import { AiFillHeart, AiOutlineDollarCircle } from "react-icons/ai";
import Input from "./input.jsx";
export default function Sidebar() {
  const { setgiatien, mathang } = useContext(MyContext);
  return (
    <div className="h-full w-1/6  mt-2 font-fontcuong pl-6 border-zinc-300 border hidden lg:block">
      <span className="font-bold">Lọc sản phẩm:</span>
      <div className="flex gap-1 mt-2">
        <AiFillHeart className="mt-1 text-red-800"></AiFillHeart>
        <span>Thể loại:</span>
      </div>
      {mathang === "Áo" && (
        <>  
          <Input name={"Áo Polo"} />
          <Input name={"Áo Thun"} />
          <Input name={"Áo Sơ Mi"} />
        </>
      )}
      {mathang === "Quần" && (
        <>     
          <Input name={"Quần Tây"} />
          <Input name={"Quần Bò"} />
          <Input name={"Quần Đùi"} />
        </>
      )}
      {mathang === "Giày" && (
        <>    
          <Input name={"Giày Adidas"} />
          <Input name={"Giày Lười"} />
        </>
      )}
      {mathang === "Đồng Hồ" && (
        <>
          <Input name={"Đồng Hồ Nam"} />
          <Input name={"Đồng Hồ Nữ"} />
        </>
      )}

      <div className="flex gap-1 mt-2">
        <AiOutlineDollarCircle className="mt-1 text-green-800"></AiOutlineDollarCircle>
        <span>Giá tiền:</span>
      </div>
      <div className="flex gap-2  text-sm">
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setgiatien(50000);
          }}
        />
        <label>50.000 đến 100.000 </label>
      </div>
      <div className="flex gap-2 text-sm mt-4">
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setgiatien(100000);
          }}
        />
        <label>100.000 đến 500.000 </label>
      </div>
      <div className="flex gap-2 text-sm mt-4">
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setgiatien(500000);
          }}
        />
        <label>500.000 đến 1000.000 </label>
      </div>
      <div className="flex gap-2 text-sm mt-4">
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setgiatien(null);
          }}
        />
        <label>Mọi giá</label>
      </div>
    </div>
  );
}
