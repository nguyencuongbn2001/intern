// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import data from "./data_test.json";
import Pagniation from "./Pagniation";
export default function Content() {

  
  return (
    <>
    <div className="flex flex-col">
    <div className=" w-5/6 grid lg:grid-cols-3 md:grid-cols-2 lg:ml-16 ml-10">
        {data.map((content) => {
          return (
            <div  
              key={content.id}
              className="col-span-1 border-gray-300 border flex flex-wrap justify-center items-center ml-2 mt-2 group relative font-fontcuong "
            >
              <div
                className = {` w-40 
                cursor-pointer
                h-40 
                bg-contain 
                bg-no-repeat      
                    after:absolute
                    after:bottom-0
                    after:bg-slate-50
                    after:opacity-80
                    after:h-0
                    after:left-0
                    after:hover:h-52
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
                 
                style={{ backgroundImage: `url(${content.image})`}}
              ></div>
              <div className="w-full text-center uppercase">{content.name}</div>
              <div className="w-full text-center ">{content.giatien}</div>
              <div className= {`w-28
                absolute
               bg-slate-600 
               text-white 
               uppercase 
               font-fontcuong 
               cursor-pointer 
               text-center
               text-xs
               py-2
               bottom-12
               hover:bg-slate-400
               hidden
               translate-y-2/4
               group-hover:block 
               group-hover:transition-all
               group-hover:animate-fadeIn
               h-7 `}>Thêm giỏ hàng</div>
            </div>
          );
        })}
      </div>
      <Pagniation/>
    </div>
      
    </>
  );
}
