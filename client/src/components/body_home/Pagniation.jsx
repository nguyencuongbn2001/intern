
import { BiArrowBack } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
export default function Pagniation() {
  return (
    <div className="flex justify-center mt-4">
      <div
        className="font-fontcuong 
                text-lg 
                border 
                w-40 
                h-10
                flex 
                items-center
                justify-center
                bg-slate-300
                uppercase 
                cursor-pointer
                hover:bg-slate-500
                hover:opacity-70
                "
      >
        <BiArrowBack />
        Trang trước
      </div>
      <div></div>
      <div
        className="font-fontcuong 
                text-lg 
                border 
                w-40 
                h-10
                flex 
                items-center
                justify-center
                bg-slate-300
                uppercase
                cursor-pointer
                hover:bg-slate-500
                hover:opacity-70"
      >
        
        Trang sau
        <GrLinkNext></GrLinkNext>
      </div>
    </div>
  );
}
