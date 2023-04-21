// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '../pages/Home.jsx'
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
export default router;
