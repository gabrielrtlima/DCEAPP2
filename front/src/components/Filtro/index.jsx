import { FaCar, FaPhone, FaMusic, FaBed } from 'react-icons/fa';
import './index.css'

const Filtro = () => {


    return(
        <div className="filtro-container">
            <div className="filtro-circulo"><FaCar size={50} />Autos e peças</div>
            <div className="filtro-circulo"><FaPhone size={50}/>Eletrônicos e Celulares</div>
            <div className="filtro-circulo"><FaMusic size={50}/>Músicas e Hobbies</div>
            <div className="filtro-circulo"><FaBed size={50}/>Para sua casa</div>
        </div>
    )
}

export default Filtro