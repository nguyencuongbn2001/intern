import React, { useState } from "react";

export const MyContext = React.createContext();
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const ContextProvide = ({ children }) => {
  const [opencardlogin,setopencardlogin] = useState(false);
  const [giatien,setgiatien] = useState(null)
  const [mathang,setmathang] = useState(null)
  const [theloai,settheloai] = useState(null)
  const [islogin,setislogin] = useState(false)
  const [openshoping, setopenshoping]  = useState(true)
  const [soluongcart,setsoluongcart] = useState()
  return <MyContext.Provider value={{openshoping,setopenshoping,opencardlogin,setopencardlogin,giatien,setgiatien,mathang,setmathang,theloai,settheloai,islogin,setislogin,soluongcart,setsoluongcart  }}>
    {children}
    </MyContext.Provider>;
};
export default ContextProvide