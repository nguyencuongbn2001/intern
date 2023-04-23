import { useContext } from "react";
import { MyContext } from "../context/Context";
import { GiCancel } from "react-icons/gi";
export default function Modal() {
  const { opencardlogin,setopencardlogin } = useContext(MyContext);
  return (
    <div
      className={`flex items-center justify-center fixed z-50 inset-0 bg-neutral-700/80 ${
        opencardlogin ? "block" : "hidden"
      }`}
    >
      <div className="lg:w-1/3 bg-slate-50 h-80 w-4/5 md:3/5 rounded">
       <div className="relative">
          <div className=" flex items-center justify-center text-center font-fontcuong lg:text-2xl font-normal text-base">Dang ki</div>
         
          <GiCancel className="mt-1 cursor-pointer h-6 w-6 text-slate-400 absolute right-0 top-0 lg:w-8 lg:h-8" onClick ={()=>{setopencardlogin(false)}}></GiCancel>
  
       </div>
        
        <div
          className="bg-red-700 w-full h-16 flex items-center justify-center text-white 
        font-fontcuong uppercase 
        font-semibold
        text-xl mt-2"
        >
          daang ki
        </div>
      </div>
    </div>
  );
}
