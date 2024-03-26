import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { escogerCancion } from '../../../redux/states/managerSlice';
import LoopVideo from '../../../components/LoopVideo';

import relatosVideo from '../../../assets/guaviare/jorge/loop-jorge.mp4';
import audioImg from '../../../assets/generales/audio.png';
import audioOnImg from '../../../assets/generales/audio-on.png';

import './Relatos.css'

const Relatos = ({ jorgeRelatoVideoRef }) => {

    const dispatch = useDispatch();
    const cancionActual = useSelector(state => state.managerReducer.cancionActual);

    const [pAudio1, setPAudio1] = useState(null);
    const [pAudio2, setPAudio2] = useState(null);
    const [mostrarVideo, setMostrarVideo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarVideo(true);
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (cancionActual == null) {
            setPAudio1(false);
            setPAudio2(false);
        }
    }, [cancionActual])

    const playAudio1 = () => {
        if (cancionActual == 1) {
            setPAudio1(false);
            dispatch(escogerCancion(null));
        } else {
            setPAudio1(true);
            setPAudio2(false);
            dispatch(escogerCancion(1));
        }
    }

    const playAudio2 = () => {
        if (cancionActual == 2) {
            setPAudio2(false);
            dispatch(escogerCancion(null));
        } else {
            setPAudio1(false);
            setPAudio2(true);
            dispatch(escogerCancion(2));
        }
    }

    return (
        <div className="seccion jorge-relatos" >
            {!mostrarVideo && <div className='descargando'>Descargando...</div>}
            {mostrarVideo &&
                <LoopVideo
                    videoRef={jorgeRelatoVideoRef}
                    tiempo='3000'
                    video={relatosVideo}
                />
            }
            <div className='mask-general'>
                <div className="relatos-contenido jorge-relatos-gsap">
                    <div className='relatos-audio-obj'>
                        <div className='relatos-audio-obj-top'>
                            <img src={(pAudio1) ? audioOnImg : audioImg} onClick={() => { playAudio1() }} ></img>
                            <h2>"Cuando llegué al Raudal"</h2>
                        </div>
                    </div>
                    <div className='relatos-audio-obj'>
                        <div className='relatos-audio-obj-top'>
                            <img src={(pAudio2) ? audioOnImg : audioImg} onClick={() => { playAudio2() }} ></img>
                            <h2>"Somos nuestras propias ambulancias"</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relatos