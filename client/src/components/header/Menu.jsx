// eslint-disable-next-line no-unused-vars
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
export default function Menu() {
  const {mathang,setmathang} = useContext(MyContext)
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
            <span className={`${mathang === 'Áo' && "text-blue-500"}`}>Áo</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Quần")}}
          className=" ct-menu
                    "
        >
          <Link>
            <span className={`${mathang === 'Quần' && "text-blue-500"}`}>Quần</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Giày")}}
          className="ct-menu
                    "
        >
          <Link>
            <span className={`${mathang === 'Giày' && "text-blue-500"}`}>Giày</span>
          </Link>
        </li>
        <li onClick={()=>{setmathang("Đồng Hồ")}}
          className="ct-menu
                    "
        >
          <Link>
            <span className={`${mathang === 'Đồng Hồ' && "text-blue-500"}`}>Đồng Hồ</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
