import {RiCopyrightLine} from 'react-icons/ri'
export default function ContentFooter() {
  return (
    <div className=" flex flex-col items-center justify-center h-full">
      <div className="text-gray-200 text-center">
        <span> Website được thiết kế bởi Nguyễn Văn Cường!!!</span>
      </div>
      <div className="text-white flex text-center">
      <RiCopyrightLine className="mt-1"></RiCopyrightLine> Copy Right 2023 </div> 
    </div>
  );
}
