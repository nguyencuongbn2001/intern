// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import Header_body from "./header_body";
import Content from "./content";

export default function Body() {
  return (
    <>
      <div className="w-full h-full">
        <Header_body />
        <div className="flex">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
}
