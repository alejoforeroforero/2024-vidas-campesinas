import { useEffect, useState } from 'react';

import GaleriaMarisol from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 40000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion marisol-galeria'>
            {!mostrarGaleria &&
                <div className='descargando'>Descargando...</div>
            }
            {mostrarGaleria &&
                <GaleriaMarisol />
            }
        </div>
    )
}

export default Galeria