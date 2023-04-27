// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
export default function Menu() {
  const {setmathang} = useContext(MyContext)
  return (
    <>
      <ul
        className="
            flex 
            gap-20
            items-center
            justify-center
            "
      >
        <li className=" ct-menu " onClick={()=>{setmathang("Áo")}}>
          <Link>
            <span>Áo</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Quần")}}
          className=" ct-menu
                    "
        >
          <Link>
            <span>Quần</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Giày")}}
          className="ct-menu
                    "
        >
          <Link>
            <span>Giày</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Đồng Hồ")}}
          className="ct-menu
                    "
        >
          <Link>
            <span>Đồng Hồ</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
