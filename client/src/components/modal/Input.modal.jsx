// eslint-disable-next-line react/prop-types
export default function Inputmodal({ registerlabel,label, register, required,type }) {

  // eslint-disable-next-line react/prop-types
  return (
    <div className="relative w-full">
      <div className=" flex-col mt-10 justify-center lg:ml-12 flex ml-4 md:ml-10">
        <input defaultValue={''} type={type} {...register(registerlabel, { required })}  placeholder=" " required className="
        lg:h-12 
        peer 
        w-11/12 
        h-10
        font-fontcuong
          border-2
           rounded
           outline-none
           transition
           font-light 
           p-4
           pt-6 
           focus:border-blue-600
          " />
        <label className="absolute
        duration-150
        transform
        -translate-y-4
        left-8
        md:left-12 
        lg:left-16
        font-fontcuong
        text-sm
        z-10
        origin-[0]
        scale-75
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:-translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ">{label}</label>
        
      </div>
    </div>
  );
}
