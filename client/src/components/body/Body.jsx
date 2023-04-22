// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header_body from "./header_body";
import Content from "./Content.Body";
import Loading from "./Loading";
import data2 from "./data_test.json";
export default function Body() {
  const [data,setdata] = useState(data2);
  const [loading,setloading] = useState(false);
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },1000)
  },[data])

  return (
    <>
      <div className="w-full h-full">
        <Header_body />
        <div className="flex">
          <Sidebar />
        {loading ? <Loading/>:  <Content />}    
        </div>
      </div>
    </>
  );
}
