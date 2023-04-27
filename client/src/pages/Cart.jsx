import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Body from "../components/cart/Body";
export default function Card() {
  return (

      <div className="max-w-screen-xl h-max mx-auto">
        <Navbar Menu={false} on={false }/>
        <Body />
        <Footer />
      </div>
  );
}
