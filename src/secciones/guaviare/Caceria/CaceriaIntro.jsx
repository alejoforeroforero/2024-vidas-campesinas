
import { useState } from 'react';
import './CaceriaIntro.css';

const CaceriaIntro = () => {

    const secciones = ['intro', 'fotos', 'audio', 'otros']

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
                Screen 1
            </div>
        )
    }

    const pintarF2 = () => {
        return (
            <div>
                 Screen 2
            </div>
        )
    }

    const pintarF3 = () => {
        return (
            <div>
                 Screen 3
            </div>
        )
    }

    const pintarF4 = () => {
        return (
            <div>
                 Screen 4
            </div>
        )
    }

    return (
        <div className='guaviare-caceria'>
            <div className="guaviare-caceria-contenido">
                {currentImage == 0 && pintarF1()}
                {currentImage == 1 && pintarF2()}
                {currentImage == 2 && pintarF3()}
                {currentImage == 3 && pintarF4()}
            </div>
            <button className='guaviare-caceria-prev' onClick={prevImage}>&#60;</button>
            <button className='guaviare-caceria-next'  onClick={nextImage}>&#62;</button>
        </div>
    )
}

export default CaceriaIntro