import React, { useState } from 'react';
import img1 from '../../../assets/guaviare/jorge/foto1.jpg';
import img2 from '../../../assets/guaviare/jorge/foto2.jpg';
import img3 from '../../../assets/guaviare/jorge/foto3.jpg';
import img4 from '../../../assets/guaviare/jorge/foto4.jpg';
import flechaAdelante from '../../../assets/generales/flecha-adelante.png';
import flechaAtras from '../../../assets/generales/flecha-atras.png';


const GaleriaC = () => {

    const images = [img1, img2, img3, img4];

    const [currentImage, setCurrentImage] = useState(0);
    const [booleanImg, setBooleanImg] = useState(false);

    const prevImage = () => {
        setBooleanImg(!booleanImg)
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setBooleanImg(!booleanImg)
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handleOnClick = (index) => {
        setCurrentImage(index);
    }

    return (
        <div className="carousel-general">
            <div className="container">
                <div className="image-container">
                    {booleanImg && <img className='image-s' src={images[currentImage]} alt='images' />}
                    {!booleanImg && <img className='image-n' src={images[currentImage]} alt='images' />}
                </div>
                <div className='carousel-botones jorge-botones-galeria'>
                    <div>
                        <button onClick={prevImage}>
                            <img src={flechaAtras} alt='flecha'></img>
                        </button>
                        <button onClick={nextImage}>
                            <img src={flechaAdelante} alt='flecha'></img>
                        </button>
                    </div>
                </div>
                <div className='carousel-navegacion'>
                    {images.map((img, index) => {
                        return (
                            <div
                                onClick={() => { handleOnClick(index) }}
                                key={index}
                                className={(index == currentImage) ? 'galerias-s' : 'galerias-n'}
                            >
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default GaleriaC