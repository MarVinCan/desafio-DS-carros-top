import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";
import CommentCard from "../../components/ CommentCard";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="dsct-catalog-cards">
          <div className="dsct-card-title">Venha nos visitar</div>
          <CardCar />
          <CardCar />
        </div>
      </main>
      <div>
        <CommentCard />
      </div>
      <Footer/>
    </>
  );
}
