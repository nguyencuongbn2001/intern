

export default function Detailproduct(props) {
  return (
    <div className='flex flex-col mt-4'>
         <div className='w-full font-fontcuong text-base font-semibold uppercase text-gray-600 '>Mô tả:</div>
         <div className='font-fontcuong text-sm mt-2'>Xuất sứ: {props.xuatxu}</div>
         <div className='font-fontcuong text-sm mt-2'>Chất liệu: {props.chatlieu}</div>   
    </div>
   
  )
}
