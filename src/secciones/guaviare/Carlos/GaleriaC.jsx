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

    const handleOnClick = (index) => {
        setCurrentImage(index);
    }

    return (
        <div className="carousel-carlos-general">
            <div className="carousel-container">
                <div className="image-container">
                    <img src={images[currentImage]} alt='images' />
                </div>
                <div className='carousel-navegacion'>
                    {images.map((img, index) => {
                        return (
                            <div 
                                onClick={() => { handleOnClick(index) }} 
                                key={index}
                                className={(index ==currentImage) ? 'galerias-s' : 'galerias-n' }
                            > 
                            </div>
                        )
                    })}
                </div>
                {/* <button onClick={prevImage}>  </button>
                <button onClick={nextImage}>Siguiente</button> */}
                <p>{currentImage+1}</p>
            </div>
        </div>

    );

}

export default GaleriaC