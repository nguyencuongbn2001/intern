import { useContext, useState } from "react";
import { MyContext } from "../context/Context";
import { GiCancel } from "react-icons/gi";
import Inputmodal from "./Input.modal";
import { useForm } from "react-hook-form";
import validator from 'validator';
export default function Modal() {
  const { register, handleSubmit } = useForm()
  const { opencardlogin,setopencardlogin } = useContext(MyContext);
  const [isloginform,setisloginform ]= useState(true);
  const onSubmit = (data) =>
  {
    if(validator.isEmail(data.Email) ===  false)
    {
      alert("Vui lòng nhập lại email đúng định dạng")
    }   
   
    if(data.Password !== data.RePassword)
    {
      alert("Nhập lại password không chính xác")
    }
    

   
  }
  return (
    <>
    {isloginform? 
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
      className={`flex items-center justify-center fixed z-50 inset-0 bg-neutral-700/80 ${
        opencardlogin ? "block" : "hidden" 
      } animate-fadeIn`}
    >
      <div className="lg:w-1/3 bg-slate-50 h-max w-4/5 md:3/5 rounded ">
       <div className="relative border-b-2">
          <div className=" flex items-center justify-center text-center font-fontcuong lg:text-2xl mt-4 font-semibold text-base mb-3 lg:mb-7">Login</div>     
          <GiCancel className="mt-1 cursor-pointer h-6 w-6 text-slate-400 absolute right-0 top-0 lg:w-8 lg:h-8" onClick ={()=>{setopencardlogin(false)}}></GiCancel>
       </div>

        <Inputmodal register={register} label={'Email'} required/>
        <Inputmodal register={register} label={'Password'} required/>

        <button type="submit"
          className="bg-red-500 w-10/12 h-12 lg:ml-12  ml-4 md:ml-10 rounded  flex items-center justify-center text-white 
        font-fontcuong  
        font-normal
        text-xl mt-12 mb-4 cursor-pointer hover:bg-red-700"
        >
          Continue
        </button>
        <div className="text-blue-500 font-semibold font-fontcuong text-sm  text-center cursor-pointer mb-2 hover:text-blue-800" onClick={()=>{setisloginform(false)}}>Chưa có tài khoản? Chuyển sang đăng ký</div>
      </div>
    </div>
    </form>
    :<form onSubmit={handleSubmit(onSubmit)}>
      <div
      className={`flex items-center justify-center fixed z-50 inset-0 bg-neutral-700/80 ${
        opencardlogin ? "block" : "hidden" 
      } animate-fadeIn`}
    >
      <div className="lg:w-1/3 bg-slate-50 h-max w-4/5 md:3/5 rounded ">
       <div className="relative border-b-2">
          <div className=" flex items-center justify-center text-center font-fontcuong lg:text-2xl mt-4 font-semibold text-base mb-3 lg:mb-7">Register</div>     
          <GiCancel className="mt-1 cursor-pointer h-6 w-6 text-slate-400 absolute right-0 top-0 lg:w-8 lg:h-8" onClick ={()=>{setopencardlogin(false), setisloginform(true)}}></GiCancel>
       </div>
       <Inputmodal register={register} label={'Email'} required/>
       <Inputmodal register={register} label={'Password'} required/>
       <Inputmodal register={register} label={'RePassword'} required/>
        <button type="submit"
          className="bg-red-500 w-10/12 h-12 lg:ml-12  ml-4 md:ml-10 rounded  flex items-center justify-center text-white 
        font-fontcuong  
        font-normal
        text-xl mt-12 mb-4 cursor-pointer hover:bg-red-700"
        >
          Continue
        </button>
        <div className="text-blue-500 font-semibold font-fontcuong text-sm  text-center cursor-pointer mb-2 hover:text-blue-800" onClick={()=>{setisloginform(true)}}>Đã có tài khoản? Chuyển sang đăng nhập</div>
      </div>
    </div>
    </form>}
        
    </>
    
    
  );
}
