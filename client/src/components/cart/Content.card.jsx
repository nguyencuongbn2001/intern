import * as Query from "../../graphql/Query.jsx";
import Loading from "./../../pages/Loading";
import Error from "./../../pages/Error";
import { useQuery } from "@apollo/client";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlineDelete } from "react-icons/ai";
import * as Mutation from "../../graphql/Mutation.jsx";
import { useMutation } from "@apollo/client";
export default function Contentcard() {
  const { loading, error, data } = useQuery(Query.getCart, {
    pollInterval: 500,
  });
  const [addToCart] = useMutation(Mutation.addCart, {
    onError: (error) => console.log(error),
    onCompleted: (data) => console.log(data),
  });
  const [deleteCart] = useMutation(Mutation.deleteCart, {
    onError: (error) => console.log(error),
    onCompleted: (data) => console.log(data),
  });
  const [order] = useMutation(Mutation.order, {
    onError: (error) => alert(error),
    onCompleted: () => alert('Đặt hàng thành công!'),
  });
  if (loading) return <Loading />;
  if (error) return <Error />;
  let index = 0;
  let tongtien = 0;
  const formattedAmount = (amount) => {
    const tien = amount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return tien;
  };
  const addCart = async (clothesId) => {
    await addToCart({ variables: { clothesId: clothesId, soluong: 1 } });
  };
  const minusCart  = async (clothesId) => {
    await addToCart({ variables: { clothesId: clothesId, soluong: -1 } });
  };
  return (
    <div>
      <div className="border-2 border-cyan-700 w-full h-max">
        <span className="font-fontcuong text-xl ">Thông tin:</span>
        <div className="flex justify-center">
          <div className="w-10/12 h-80 border-2 border-gray-300 overflow-y-scroll font-fontcuong">
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
                Options
              </div>
            </div>
            {data?.getCart.map((content) => {
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
                  <div className="border w-2/12 h-32 flex justify-center items-center">
                    <div className="flex gap-5 justify-center items-center w-full h-full ">
                      <BsPlusCircle className="w-1/5 h-1/5  text-green-500 cursor-pointer" onClick={()=>{addCart(content.clothes[0]._id)}}/>
                      <AiOutlineMinusCircle className="w-1/5 h-1/5 text-orange-500 cursor-pointer" onClick={()=>{minusCart(content.clothes[0]._id)}}/>
                      <AiOutlineDelete className="w-1/5 h-1/4 text-red-500 cursor-pointer" onClick={()=>{deleteCart({ variables: { clothesId: content.clothes[0]._id}})}}/>
                    </div >
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
          <div
            className="rounded p-4 w-32 mr-2 flex items-center justify-center bg-red-700 cursor-pointer text-xl font-fontcuong
          text-white"
          onClick={()=>{order()}}>
            Đặt hàng
          </div>
        </div>
      </div>
    </div>
  );
}
