import { useEffect, useState } from 'react';

import GaleriaElias from './GaleriaC';

import './Galeria.css'

const Galeria = () => {

    const [mostrarGaleria, setMostrarGaleria] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarGaleria(true)
        }, 45000)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className='seccion elias-galeria'>
            {!mostrarGaleria &&
                <div>Loading...</div>
            }
            {mostrarGaleria &&
                <GaleriaElias />
            }
        </div>
    )
}

export default Galeria