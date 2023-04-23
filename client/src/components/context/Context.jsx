import React, { useState } from "react";

export const MyContext = React.createContext();
// eslint-disable-next-line react/prop-types

const ContextProvide = ({ children }) => {
  const [opencardlogin,setopencardlogin] = useState(false);
  console.log("🚀 ~ file: Context.jsx:8 ~ ContextProvide ~ opencardlogin:", opencardlogin)
  
  return <MyContext.Provider value={{opencardlogin,setopencardlogin}}>
    {children}
    </MyContext.Provider>;
};
export default ContextProvide