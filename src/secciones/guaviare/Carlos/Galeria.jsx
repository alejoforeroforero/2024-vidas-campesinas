import { useEffect, useState } from 'react';

import GaleriaCarlos from './GaleriaC';

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
        <div className='seccion carlos-galeria'>
            {!mostrarGaleria &&
                <div>Loading...</div>
            }
            {mostrarGaleria &&
                <GaleriaCarlos />
            }
        </div>
    )
}

export default Galeria