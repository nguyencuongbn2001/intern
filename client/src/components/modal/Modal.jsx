import { useContext, useState } from "react";
import { MyContext } from "../context/Context";
import { GiCancel } from "react-icons/gi";
import Inputmodal from "./Input.modal";
import { useForm } from "react-hook-form";
import { useMutation } from '@apollo/client';
import * as Mutation from '../../graphql/Mutation.jsx';
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const { register, handleSubmit,reset } = useForm();
  const navigate  = useNavigate()
  const { opencardlogin,setopencardlogin } = useContext(MyContext);
  const [isloginform,setisloginform ]= useState(true);
    // const [registerUser,{ registerloading:loading,registererror: error,registerdata: data }] = useMutation(Mutation.registerUser);
   const [loginUser] = useMutation(Mutation.loginUser,{
    onError: (error) => console.log(error),
    onCompleted: (data) =>{console.log(data);}
    },
  );
  const onSubmit1 = async (data)=> {
    if(data.RePassword && data.Password.length < 6){
      alert("Password quá ngắn ")
    }
    if( data.RePassword && data.RePassword !== data.Password){
      alert("Password không giống RePassword ")
    }
    await loginUser({variables:{email:data.Email,password:data.Password}})
    
  }
  const onSubmit2 = ()=>{}

  return (
    <>
    {isloginform? 
    <form onSubmit={handleSubmit(onSubmit1)}>
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
        <Inputmodal register={register} label={'Password'} type={'password'} required/>

        <button type="submit"
          className="bg-red-500 w-10/12 h-12 lg:ml-12  ml-4 md:ml-10 rounded  flex items-center justify-center text-white 
        font-fontcuong  
        font-normal
        text-xl mt-12 mb-4 cursor-pointer hover:bg-red-700"
        >
          Continue
        </button>
        <div type="reset" onClick = {()=>{reset(),setisloginform(false)}} className="text-blue-500 font-semibold  font-fontcuong text-sm  text-center cursor-pointer mb-2 hover:text-blue-800" >Chưa có tài khoản? Chuyển sang đăng ký</div>
      </div>
    </div>
    </form>
    :<form onSubmit={handleSubmit(onSubmit2)} className="myform2">
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
       <Inputmodal register={register} label={'Password'} type={'password'} required/>
       <Inputmodal register={register} label={'RePassword'} type={'password'} required/>
        <button type="submit"
          className="bg-red-500 w-10/12 h-12 lg:ml-12  ml-4 md:ml-10 rounded  flex items-center justify-center text-white 
        font-fontcuong  
        font-normal
        text-xl mt-12 mb-4 cursor-pointer hover:bg-red-700"
        >
          Continue
        </button>
        <div type="reset" onClick = {()=>{reset(),setisloginform(true)}} className="text-blue-500 font-semibold font-fontcuong text-sm  text-center cursor-pointer mb-2 hover:text-blue-800" >Đã có tài khoản? Chuyển sang đăng nhập</div>
      </div>
    </div>
    </form>}
        
    </>
    
    
  );
}
