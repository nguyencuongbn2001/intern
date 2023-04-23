
import Navbar from '../components/header/Navbar'
import Bodydetail from '../components/body_detail/Body'
import Footer from '../components/footer/Footer'
import Modal from '../components/modal/Modal'

export default function Detail() {
  return (
    <div className="max-w-screen-xl h-max mx-auto">
        <Navbar Menu = {false}/>
        <Bodydetail/>
        <Footer/>
        <Modal/>
    </div>
  )
}
