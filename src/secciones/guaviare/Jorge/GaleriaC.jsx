import React, { useState } from 'react';
import img1 from '../../../assets/guaviare/jorge/foto1.jpg';
import img2 from '../../../assets/guaviare/jorge/foto2.jpg';
import img3 from '../../../assets/guaviare/jorge/foto3.jpg';
import './GaleriaC.css'

const GaleriaC = () => {

    const images = [img1, img2, img3];

    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };


    return (
        <div className="carousel-general">
            <div className="carousel-container">
                <button onClick={prevImage}>Anterior</button>
                <div className="image-container">
                    <img src={images[currentImage]} alt='images' />
                </div>
                <button onClick={nextImage}>Siguiente</button>
            </div>
        </div>

    );

}

export default GaleriaC