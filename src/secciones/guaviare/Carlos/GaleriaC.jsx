import React, { useState } from 'react';
import img1 from '../../../assets/guaviare/carlos/foto1.jpg';
import img2 from '../../../assets/guaviare/carlos/foto2.jpg';
import img3 from '../../../assets/guaviare/carlos/foto3.jpg';
import img4 from '../../../assets/guaviare/carlos/foto4.jpg';


const GaleriaC = () => {

    const images = [img1, img2, img3, img4];

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
        <div className="carousel-general">
            <div className="container">
                <div className="image-container">
                    <img src={images[currentImage]} alt='images' />
                </div>
                <div className='carousel-botones'>
                    <button onClick={prevImage}>&#60;</button>
                    <button onClick={nextImage}>&#62;</button>
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
                <p>{currentImage + 1} de {images.length}</p>
            </div>
        </div>
    );
}

export default GaleriaC