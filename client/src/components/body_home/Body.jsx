// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header_body from "../header/Header.body";
import Content from "./Content.Body";
// import Loading from "./Loading";
// import { MyContext } from "../context/Context";
export default function Body() {
 
  return (
    <>
      <div className="w-full h-full">
        <Header_body info = {'Mua sắm cùng airbnb'}/>
        <div className="flex">
          <Sidebar />
          <Content />  
        </div>
      </div>
    </>
  );
}
