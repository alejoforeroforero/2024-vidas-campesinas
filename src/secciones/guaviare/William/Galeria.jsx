import { useEffect, useState } from 'react';

import GaleriaWilliam from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 35000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion william-galeria'>
            {!mostrarGaleria &&
                <div>Loading...</div>
            }
            {mostrarGaleria &&
                <GaleriaWilliam />
            }
        </div>
    )
}

export default Galeria