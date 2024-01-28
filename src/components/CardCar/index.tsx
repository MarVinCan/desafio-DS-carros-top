import carImg from '../../assets/car-catalog.png';
import './styles.css';
export default function CardCar(){
    return (
        <div className="dsct-card-conteiner">
            <div className='dsct-conteiner-home-top'>
                <img src={carImg} alt="Carro" />
            </div>
            <div className='dsct-conteiner-home-bottom'>
                <h2>Lorem ipsum dolor</h2>
            </div>
        </div>
    );
}