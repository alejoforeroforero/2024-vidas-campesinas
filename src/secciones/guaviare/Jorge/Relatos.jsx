import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { escogerCancion } from '../../../redux/states/managerSlice';
import LoopVideo from '../../../components/LoopVideo';

import relatosVideo from '../../../assets/guaviare/jorge/loop-relatos.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';
import audioImg from '../../../assets/generales/audio.png';
import audioOnImg from '../../../assets/generales/audio-on.png';

import './Relatos.css'

const Relatos = ({ jorgeRelatoVideoRef }) => {

    const dispatch = useDispatch();
    const cancionActual = useSelector(state => state.managerReducer.cancionActual);

    const [pAudio1, setPAudio1] = useState(null);
    const [pAudio2, setPAudio2] = useState(null);

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
            <LoopVideo
                videoRef={jorgeRelatoVideoRef}
                tiempo='3000'
                video={relatosVideo}
                poster={videoGuaviarePoster}
            />
            <div className="relatos-mask"></div>
            <div className="jorge-relatos-contenido">
                <div className='relatos-audio-obj'>
                    <img src={(pAudio1) ? audioOnImg : audioImg} onClick={() => { playAudio1() }} ></img>
                    <p>"Cuando llegué al Raudal"</p>
                </div>
                <div className='relatos-audio-obj'>
                    <img src={(pAudio2) ? audioOnImg : audioImg} onClick={() => { playAudio2() }} ></img>
                    <p>"Somos nuestras propias ambulancias"</p>
                </div>
            </div>
        </div>
    )
}

export default Relatos