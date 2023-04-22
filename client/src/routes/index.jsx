// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "../pages/Home.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "../pages/Error.jsx";
import Detail from "../pages/Detail.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  return <Outlet />;
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
        path: "/detail/:id",
        element: <Detail />,
      }
    ],
  },
]);
export default router;
