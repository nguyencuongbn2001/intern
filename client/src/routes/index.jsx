// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../pages/Home.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "../pages/Error.jsx";
import Detail from "../pages/Detail.jsx";
import Cart from "../pages/Cart.jsx";
import ContextProvide from "../components/context/Context.jsx";
import Loading from "../pages/Loading.jsx";
// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  // eslint-disable-next-line no-undef
 
  return <ContextProvide><Outlet /></ContextProvide>;
};

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:clothesId",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
