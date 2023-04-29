import { useForm } from "react-hook-form";
import Inputmodal from "../modal/Input.modal";
import { useMutation, useQuery } from "@apollo/client";
import * as Mutation from "../../graphql/Mutation";
import * as Query from "../../graphql/Query";
export default function CardInfo() {
  const { register, handleSubmit } = useForm();
  const [updateUser] = useMutation(Mutation.updateUser, {
    onError: (err) => alert(err),
    onCompleted: () => alert("Cập nhật thông tin thành công"),
  });
   const  {data} = useQuery(Query.getUser)
   
  const onSubmit = (data) => {
    updateUser({  
      variables: {
        firstname: data.firstname,
        lastname: data.lastname,
        address: data.address,
        phone: String(data.phone),
      },
    });
  };
  return (
    <div className="col-span-7 col-end-10 h-full flex font-fontcuong">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {data?.getUser &&  <div className="block w-full">
          <Inputmodal value={`${data?.getUser.firstname}`}
            registerlabel={"firstname"}
            register={register}
            label={"Họ"}
            required
          />
          <Inputmodal value={`${data?.getUser.lastname}`}
            registerlabel={"lastname"}
            register={register}
            label={"Tên"}
            required
          />
          <Inputmodal value={`${data?.getUser.address}`}
            register={register}
            label={"Địa chỉ"}
            registerlabel={"address"}
            required
          />
          <Inputmodal
            register={register} value={`${data?.getUser.phone}`}
            registerlabel={"phone"}
            label={"Số điện thoại"}
            type={"number"}
            required
          />
          <button
            className="hover:bg-red-800 ml-10 lg:ml-80 bg-red-600 text-slate-50  mt-4 border rounded w-32 h-10"
            type="submit"
          >
            Cập nhật
          </button>
        </div>}
       
      </form>
    </div>
  );
}
