import React from "react";
import { useForm } from "react-hook-form";
import Inputmodal from "../modal/Input.modal";
export default function CardInfo() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="col-span-6 col-end-10 h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="block">
       <Inputmodal registerlabel={'firstname'} register={register} label={"Họ"} required />
        <Inputmodal registerlabel={'lastname'} register={register} label={"Tên"} required />
        <Inputmodal
          register={register}
          label={"Địa chỉ"}
          registerlabel={'address'}
          required
        />
        <Inputmodal
          register={register}
          registerlabel={'phone'}
          label={"Số điện thoại"}
          type={"number"}
          required
        />
        <button className="hover:bg-red-800 ml-10 lg:ml-80 bg-red-600 text-slate-50  mt-4 border rounded w-32 h-10" type="submit">Cập nhật </button>
      </form>
    </div>
  );
}
