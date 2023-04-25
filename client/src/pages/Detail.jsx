import Navbar from "../components/header/Navbar";
import Bodydetail from "../components/body_detail/Body";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import * as Query from "../graphql/Query.jsx";
import Loading from "../pages/Loading"; 
import Error from "./../pages/Error";
export default function Detail() {
  const { clothesId } = useParams();
  const { loading, error, data } = useQuery(Query.getDetailClothes,{  variables: { clothesId },});
  if (loading) return <Loading />;
  if (error) return <Error />;
  
  return (
    <div className="max-w-screen-xl h-max mx-auto">
      <Navbar Menu={false} />
      <Bodydetail data = {data}/>
      <Footer />
      <Modal />
    </div>
  );
}
