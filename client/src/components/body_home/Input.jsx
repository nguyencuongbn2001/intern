/* eslint-disable react/prop-types */
import { MyContext } from "../context/Context";
import { useContext } from "react";
export default function Input(props) {
    const {settheloai} = useContext(MyContext)
  return (
    <div className="flex gap-2">
      <input type="radio" name="money" onClick={()=>{settheloai(`${props.name}`)}}/>
      <label>{props.name}</label>
    </div>
  );
}
