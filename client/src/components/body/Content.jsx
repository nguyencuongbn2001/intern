// eslint-disable-next-line no-unused-vars
import React from "react";
import data from "./data_test.json";
export default function Content() {
  return (
    <>
      <div className=" w-5/6 grid grid-cols-5 px-8  ">
        {data.map((content) => {
          return (
            <div
              key={content.id}
              className="col-span-1 border flex flex-wrap justify-center items-center ml-2 mt-2  relative font-poppins"
            >
              <div
                className = {` w-40 
                cursor-pointer
                h-40 
                bg-contain 
                bg-no-repeat      
                    after:absolute
                    after:bottom-10
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
              <div className=" w-full text-center bg-slate-600 text-white uppercase font-poppins cursor-pointer h-10 ">Thêm vào giỏ hàng</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
