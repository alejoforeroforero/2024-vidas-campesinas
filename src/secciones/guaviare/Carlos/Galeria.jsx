import { useEffect, useState } from 'react';

import GaleriaCarlos from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 20000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion carlos-galeria'>
            {!mostrarGaleria &&
                <div className='descargando'>Descargando...</div>
            }
            {mostrarGaleria &&
                <GaleriaCarlos />
            }
        </div>
    )
}

export default Galeria