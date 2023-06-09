/* eslint-disable react/prop-types */
import Header_body from "../header/Header.body";
import Nameproduct from "./Name.product";
import Imageproduct from "./Image.product";
import Detailproduct from "./Detail.product";
import { useMutation } from "@apollo/client";
import * as Mutation from "../../graphql/Mutation.jsx";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { useParams } from "react-router-dom";
export default function Bodydetail(props) {
  const { clothesId } = useParams();
  const {setsoluongcart, soluongcart } =useContext(MyContext);
  const [addToCart] = useMutation(Mutation.addCart, {
    onError: (error) => console.log(error),
    onCompleted: (data) => console.log(data),
    update: () => setsoluongcart(soluongcart + 1),
  });
  return (
    <div className="w-full h-full">
      <Header_body info={"Thông tin sản phẩm"} />
      <div className=" mt-4 flex-wrap flex">
        <div className="flex flex-wrap">
          <Nameproduct name={props.data.getDetailClothes.name} />
          <Imageproduct hinhanh={props.data.getDetailClothes.hinhanh} />
          <Detailproduct xuatxu={props.data.getDetailClothes.xuatxu} chatlieu={props.data.getDetailClothes.chatlieu}
          />
        </div>
        <div className="lg:grid lg:grid-cols-6 w-full">
          <div className="col-span-4"></div>
          <div className="lg:col-span-2 lg:flex lg:items-end lg:col-end-7">
            <div className="flex font-fontcuong lg:ml-[-200px]">
              <div className="font-fontcuong text-2xl font-medium w-32">
                Giá tiền:
              </div>
              <span className="text-2xl text-red-600">
                {props.data.getDetailClothes.giatien}
              </span>
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
      lg:ml-40
       mt-6"
           onClick={()=>{addToCart({variables:{ clothesId: clothesId, soluong: 1 }})}} >
              Thêm giỏ hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
