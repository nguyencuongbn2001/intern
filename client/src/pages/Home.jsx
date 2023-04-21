// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./../components/header/Navbar";
import Body from "../components/body/body";
export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl h-screen mx-auto">
        <Navbar Menu = {true}/>
        <Body/>
      </div>
    </>
  );
}
