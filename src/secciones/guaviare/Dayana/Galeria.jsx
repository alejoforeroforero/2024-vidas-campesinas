import { useEffect, useState } from 'react';
import GaleriaDayana from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 30000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion dayana-galeria'>
            {!mostrarGaleria &&
                <div>Loading...</div>
            }
            {mostrarGaleria &&
                <GaleriaDayana />
            }
        </div>
    )
}

export default Galeria