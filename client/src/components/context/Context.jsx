import React, { useState } from "react";

export const MyContext = React.createContext();
// eslint-disable-next-line react/prop-types

const ContextProvide = ({ children }) => {
  const [opencardlogin,setopencardlogin] = useState(false);
  const [isloading,setisloading] = useState(false)
  
  return <MyContext.Provider value={{opencardlogin,setopencardlogin,isloading,setisloading}}>
    {children}
    </MyContext.Provider>;
};
export default ContextProvide