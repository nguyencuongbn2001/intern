
import Navbar from "./../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ContentUser from "../components/user/Content.User";
import '../assets/04add909341377aca88212586a8b2114.png';
import '../assets/6_1636086692.jpg';
import '../assets/78fdbc1dceb38d6de7556137151a7a21.jfif';
import '../assets/ATN349-350-351.jpg';
import '../assets/Ao_polo_nam.jpg';
import '../assets/ecd30a1eefb189c9ee86e9a76ae0d63c.jfif';
import '../assets/images.jfif';
import '../assets/pc-ao-thun-tron-nu-cao-cap-mau-xanh-la-large-1673321457-2682.jpg';
import '../assets/sg-11134201-23020-7xvy0i9bs9mvc8.jfif';
export default function User() {
  return (
    <div>
         <div className="max-w-screen-xl h-max mx-auto">
          <Navbar Menu = {false}/>
            <ContentUser/>
          <Footer/>

      </div>
    </div>
  )
}
