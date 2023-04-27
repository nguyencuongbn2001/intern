// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Shopping from "./Shopping";
import { MyContext } from "../context/Context";
export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const open = props.Menu;
  const {setgiatien,setmathang} = useContext(MyContext)
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
        <div className="h-20 lg:col-span-1 p-4 col-span-3 " onClick={()=>{setmathang(null), setgiatien(null)}}>
          <Logo></Logo>
        </div>
        {open?<div
          className={`h-20 lg:col-span-4 
              p-6 ${open ? "block" : "hidden"}`}
        >
          <Menu />
        </div>:
         <div
         className={`h-20 lg:col-span-4 
             p-6`}
       >
       </div>}
        
        <div
          className="h-20 lg:col-span-1 col-end-7 col-span-2 
        p-6"
        >
          <Shopping />
        </div>
      </div>
    </>
  );
}
