import React from "react";
import Navbar from "./../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Body from "./../components/card/Body";
export default function Card() {
  return (

      <div className="max-w-screen-xl h-max mx-auto">
        <Navbar Menu={false} />
        <Body />
        <Footer />
      </div>
  );
}
