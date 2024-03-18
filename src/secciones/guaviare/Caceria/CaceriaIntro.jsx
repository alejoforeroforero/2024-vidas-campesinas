
import { useState } from 'react';
import './CaceriaIntro.css';

const CaceriaIntro = () => {

    const secciones = ['intro', 'fotos', 'audio']

    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + secciones.length) % secciones.length);
    };

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % secciones.length);
    };

    const pintarF1 = () => {
        return (
            <div>
                F1
            </div>
        )
    }

    const pintarF2 = () => {
        return (
            <div>
                F2
            </div>
        )
    }

    const pintarF3 = () => {
        return (
            <div>
                F3
            </div>
        )
    }

    return (
        <div className='guaviare-caceria'>
            <div className="guaviare-caceria-contenido">
                {currentImage == 0 && pintarF1()}
                {currentImage == 1 && pintarF2()}
                {currentImage == 2 && pintarF3()}
            </div>
            <button className='guaviare-caceria-prev' onClick={prevImage}>Prev </button>
            <button className='guaviare-caceria-next'  onClick={nextImage}>Siguiente</button>
        </div>
    )
}

export default CaceriaIntro