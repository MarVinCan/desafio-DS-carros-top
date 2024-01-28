import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div>
          <div className="dsct-catalog-cards">
            <div className="dsct-card-title">Venha nos visitar</div>
            <CardCar />
          </div>
        </div>
      </main>
    </>
  );
}
