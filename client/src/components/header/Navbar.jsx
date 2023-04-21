// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Shopping from "./Shopping";

export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const open = props.Menu;

  return (
    <>
      <div
        className="w-full 
                  h-20
                  border-b-2
                  grid 
                  grid-cols-6 
                  border-slate-400
                  "
      >
        <div className="h-20 lg:col-span-1 p-4 col-span-3 ">
          <Logo></Logo>
        </div>
        {open && <div
                className="h-20 lg:col-span-4 
              p-6"
              >
                <Menu />
              </div>}     
        <div
          className="h-20 lg:col-span-1 col-end-7  col-span-2 
  
        p-6"
        >
          <Shopping/>
        </div>
      </div>
    </>
  );
}
