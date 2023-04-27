import React, { useState } from "react";

export const MyContext = React.createContext();
// eslint-disable-next-line react/prop-types

const ContextProvide = ({ children }) => {
  const [opencardlogin,setopencardlogin] = useState(false);
  const [giatien,setgiatien] = useState(null)
  const [mathang,setmathang] = useState(null)
  const [theloai,settheloai] = useState(null)
  const [islogin,setislogin] = useState(false)
  
  console.log("🚀 ~ file: Context.jsx:11 ~ ContextProvide ~ theloai:", theloai)
  return <MyContext.Provider value={{opencardlogin,setopencardlogin,giatien,setgiatien,mathang,setmathang,theloai,settheloai,islogin,setislogin}}>
    {children}
    </MyContext.Provider>;
};
export default ContextProvide