// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
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
        <li className=" ct-menu ">
          <Link>
            <span>Áo</span>
          </Link>
        </li>
        <li
          className=" ct-menu
                    "
        >
          <Link>
            <span>Quần</span>
          </Link>
        </li>
        <li
          className="ct-menu
                    "
        >
          <Link>
            <span>Giày</span>
          </Link>
        </li>
        <li
          className="ct-menu
                    "
        >
          <Link>
            <span>Mũ</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
