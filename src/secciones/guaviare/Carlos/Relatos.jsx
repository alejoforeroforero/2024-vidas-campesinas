import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { escogerCancion } from '../../../redux/states/managerSlice';
import LoopVideo from '../../../components/LoopVideo';

import relatosVideo from '../../../assets/guaviare/carlos/loop-carlos.mp4';
import audioImg from '../../../assets/generales/audio.png';
import audioOnImg from '../../../assets/generales/audio-on.png';

import './Relatos.css'

const Relatos = ({ carlosRelatoVideoRef }) => {

    const dispatch = useDispatch();
    const cancionActual = useSelector(state => state.managerReducer.cancionActual);

    const [pAudio1, setPAudio1] = useState(null);
    const [pAudio2, setPAudio2] = useState(null);
    const [mostrarVideo, setMostrarVideo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarVideo(true);
        }, 6000)

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (cancionActual == null) {
            setPAudio1(false);
            setPAudio2(false);
        }
    }, [cancionActual])

    const playAudio1 = () => {
        if (cancionActual == 3) {
            setPAudio1(false);
            dispatch(escogerCancion(null));
        } else {
            setPAudio1(true);
            setPAudio2(false);
            dispatch(escogerCancion(3));
        }
    }



    return (
        <div className="seccion carlos-relatos" >
            {!mostrarVideo && <div>Loading</div>}
            {mostrarVideo &&
                <LoopVideo
                    videoRef={carlosRelatoVideoRef}
                    video={relatosVideo}
                />
            }
            <div className="relatos-mask"></div>
            <div className="relatos-contenido carlos-relatos-gsap">
                <div className='relatos-audio-obj'>
                    <img src={(pAudio1) ? audioOnImg : audioImg} onClick={() => { playAudio1() }} ></img>
                    <p> “Llegamos a este territorio porque era muy productivo en Cacao”</p>
                </div>
                {/* <div className='relatos-audio-obj'>
                    <img src={(pAudio2) ? audioOnImg : audioImg} onClick={() => { playAudio2() }} ></img>
                    <p>"Somos nuestras propias ambulancias"</p>
                </div> */}
            </div>
        </div>
    )
}

export default Relatos