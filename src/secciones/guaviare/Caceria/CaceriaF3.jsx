import { useEffect, useRef, useState } from 'react';

import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audioArte from '../../../assets/guaviare/caceria/audio-arte-sonoro-guaviare.mp3';

import './CaceriaF3.css';


const CaceriaF3 = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const audioRef = useRef(null);


    useEffect(()=>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
    }, [isPlaying])


    return (
        <div className='caceria-f3'>
            <h2>“Cae la noche en Raudal del Guayabero, misteriosa, imponente, y con ella, sus peligros. 
No se vale tener miedo, el jaguar sabe rastrearlo con su tecnología infalible, posando su pata sobre las huellas del caminante. Seguir el paso con valentía es la única defensa. 
Ciertamente, después de la noche vendrá el día y con él la luz del sol que todo ilumina.
”</h2>
            <div className='caceria-audio-contenedor'>
                <div className='relatos-audio-obj'>
                    <audio ref={audioRef} src={audioArte} controls></audio>
                    <img src={(!isPlaying) ? audioOnImg : audioImg} onClick={()=>setIsPlaying(!isPlaying)}></img>
                    <p>“Arte sonoro”</p>
                </div>
            </div>

        </div>
    )
}

export default CaceriaF3