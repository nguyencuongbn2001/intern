// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import Pagniation from "./Pagniation";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import * as Query from "../../graphql/Query.jsx";
import * as Mutation from "../../graphql/Mutation.jsx";
import { MyContext } from "../context/Context";
import Loading from "../../pages/Loading";
import Error from "./../../pages/Error";
export default function Content() {
  const navigate = useNavigate();
  const { theloai, giatien, mathang, setsoluongcart, soluongcart } =
    useContext(MyContext);
  const { loading, error, data } = useQuery(Query.getAllClothes, {
    variables: { giatien, mathang, theloai },
  });
  const [addToCart] = useMutation(Mutation.addCart, {
    onError: (error) => console.log(error),
    onCompleted: (data) => console.log(data),
    update: () => setsoluongcart(soluongcart + 1),
  });
  useQuery(Query.soluongCart, {
    onError: (error) => console.log(error),
    onCompleted: (data) => setsoluongcart(data.getSoluongCart.soluong),
    pollInterval:200
  });
  const addCart = async (clothesId) => {
    await addToCart({ variables: { clothesId: clothesId, soluong: 1 } });
  };
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <div className="flex flex-col">
        <div className=" w-5/6 grid lg:grid-cols-4 md:grid-cols-2 lg:ml-16 ml-10">
          {data?.getClothes.map((content) => {
            return (
              <div
                key={content._id}
                className="col-span-1 w-52 h-72 mx-10 my-4 border-gray-300 rounded border  flex flex-wrap justify-center items-center ml-2 mt-2 group relative font-fontcuong "
              >
                <div
                  onClick={() => {
                    navigate(`/detail/${content._id}`);
                  }}
                  className={` w-52  
                cursor-pointer
                h-52
                bg-cover 
                bg-no-repeat  
                flex 
                justify-center    
                    after:absolute
                    after:bottom-0
                    after:bg-slate-50
                    after:opacity-80
                    after:h-0
                    after:left-0
                    after:hover:h-72
                    after:transition-all 
                    after:ease-in-out
                    after:duration-300
                    after:w-full
                    after:text-gray-900
                    after:font-extrabold
                    after:hover:content-['Info']
                    after:text-center
                    after:hover:py-20
                    `}
                  style={{ backgroundImage: `url(${content.hinhanh})` }}
                ></div>
                <div className="w-full text-center uppercase overflow-hidden">
                  {content.name}
                </div>
                <div className="w-full text-center ">{content.giatien}</div>
                <div
                  onClick={() => {
                    addCart(content._id);
                  }}
                  className={`w-40
                absolute
               bg-slate-600 
               text-white 
               uppercase 
               font-fontcuong 
               cursor-pointer 
               text-center
               text-base
               py-3
               bottom-12
               hover:bg-amber-700
               hidden
               rounded
               h-12
               translate-y-2/4
               group-hover:block 
               group-hover:transition-all
               group-hover:animate-fadeIn
              `}
                >
                  Thêm giỏ hàng
                </div>
              </div>
            );
          })}
        </div>
        <Pagniation />
      </div>
    </>
  );
}
