
import Navbar from "./../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ContentUser from "../components/user/Content.User";
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
