
import { useState } from 'react';
import './GuayaberoIntro.css';
import GuayaberoF1 from './GuayaberoF1';
import GuayaberoF2 from './GuayaberoF2';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';
import abajoImg from '../../../assets/generales/abajo.png';
// import GuayaberoF3 from './GuayaberoF3';

const GuayaberoIntro = () => {

    const secciones = ['intro', 'video']

    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + secciones.length) % secciones.length);
    };

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % secciones.length);
    };

    return (
        <div className='guaviare-guayabero'>
            <div className="guaviare-guayabero-contenido">
                {currentImage == 0 && <GuayaberoF1 />}
                {currentImage == 1 && <GuayaberoF2 />}
                {/* {currentImage == 2 && <GuayaberoF3 />} */}
            </div>
            {currentImage != 0 &&
                <button className='flecha-atras' onClick={prevImage}>
                    <img src={flechaAtras} alt='flecha'></img>
                </button>
            }
            {currentImage != secciones.length - 1 &&
                <button className={currentImage == 0 ? 'flecha-adelante-inicio' : 'flecha-adelante'} onClick={nextImage}>
                    <img src={flechaAdelante} alt='flecha'></img>
                </button>
            }
        </div>
    )
}

export default GuayaberoIntro