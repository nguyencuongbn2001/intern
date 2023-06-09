// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "./../components/header/Navbar";
import Body from "../components/body_home/Body.jsx";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";


export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl h-max mx-auto">
        <Navbar Menu = {true}/>
        <Body/>
        <Footer/>
        <Modal/>
      </div>
    </>
  );
}
