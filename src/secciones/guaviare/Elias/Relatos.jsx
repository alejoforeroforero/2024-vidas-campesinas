import { useState, useEffect } from 'react';
import LoopVideo from '../../../components/LoopVideo';

import relatosVideo from '../../../assets/guaviare/elias/loop-elias.mp4';

import './Relatos.css'

const Relatos = ({ eliasRelatoVideoRef }) => {

    const [mostrarVideo, setMostrarVideo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarVideo(true);
        }, 35000)

        return () => clearTimeout(timer);
    }, [])


    return (
        <div className="seccion elias-relatos" >
            {!mostrarVideo && <div>Loading</div>}
            {mostrarVideo &&
                <LoopVideo
                    videoRef={eliasRelatoVideoRef}
                    video={relatosVideo}
                />
            }
            <div className='mask-general'>
                <div className="relatos-contenido">
                    <p>"Actualmente nuestro sustento depende de estas pinturas, si no las cuidamos, no vamos a tener de qué sobrevivir"</p>
                </div>
            </div>
        </div>
    )
}

export default Relatos