import { useEffect, useState } from 'react';

import GaleriaJorge from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 10000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion dayana-galeria'>
            {!mostrarGaleria &&
                <div>Loading...</div>
            }
            {mostrarGaleria &&
                <GaleriaJorge />
            }
        </div>
    )
}

export default Galeria