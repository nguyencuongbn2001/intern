import { useQuery } from '@apollo/client';
import * as Query from '../../graphql/Query';
export default function CardOrder() {
  const {error,data} =  useQuery(Query.getOrder,{
    pollInterval:500
  });
  if(error) console.log(error);
  let index = 0;
  let tongtien  = 0;  
  const formattedAmount = (amount) => {
    const tien = amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return tien;
  };
  return (
    <div className="col-span-7 col-end-10 h-max font-fontcuong">
      <span className="font-fontcuong text-xl ">Thông tin:</span>
      <div className="flex justify-center w-full">
        <div className="h-80 border-2 border-gray-300 overflow-y-scroll font-fontcuong w-full">
          <div className="flex justify-center items-center">
            <div className="border w-1/12 h-20 flex justify-center items-center">
              Số thứ tự
            </div>
            <div className="border w-3/12 h-20 flex justify-center items-center">
              Hình ảnh
            </div>
            <div className="border w-2/12 h-20 flex justify-center items-center">
              Giá tiền
            </div>
            <div className="border w-2/12 h-20 flex justify-center items-center">
              Số lượng
            </div>
            <div className="border w-2/12 h-20 flex justify-center items-center">
              Thành tiền
            </div>
            <div className="border w-2/12 h-20 flex justify-center items-center">
              Trạng thái
            </div>
          </div>
          {data?.getOrder.map((content) => {
             tongtien +=
             parseInt(content.soluong) *
             parseInt(content.clothes[0].giatien);
            return (
              <div
                key={content.clothes[0]._id}
                className="flex justify-center items-center"
              >
                <div className="border w-1/12 h-32 flex justify-center items-center">
                  {index++}
                </div>
                <div
                  style={{
                    backgroundImage: `url(${content.clothes[0].hinhanh})`,
                  }}
                  className=" bg-cover bg-no-repeat border w-3/12 h-32 flex justify-center items-center"
                ></div>
                <div className="border w-2/12  h-32 flex justify-center items-center">
                  {formattedAmount(content.clothes[0].giatien)}
                </div>
                <div className="border w-2/12  h-32 flex justify-center items-center">
                  {content.soluong}
                </div>
                <div className="border w-2/12  h-32 flex justify-center items-center">
                  {formattedAmount(
                    parseInt(content.soluong) *
                      parseInt(content.clothes[0].giatien)
                  )}
                </div>
                <div className={`border w-2/12  h-32 flex justify-center items-center ${content.status === 'Chưa xác nhận'?'text-red-700':'text-green-700'}`}>
                  {content.status}
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end items-center mt-2 mb-2 mr-2">
        <span className="mr-12 font-fontcuong text-2xl font-medium ">
          Thành tiền: {formattedAmount(tongtien)}
        </span>
       
      </div>
    </div>

  )
}
