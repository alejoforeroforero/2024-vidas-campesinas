import relatosVideo from '../../../assets/guaviare/jorge/loop-relatos.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';
import './Relatos.css'
import LoopVideo from '../../../components/LoopVideo';
import audioImg from '../../../assets/generales/audio.png';
import audioOnImg from '../../../assets/generales/audio-on.png';
import { useState, useEffect } from 'react';


const Relatos = ({ jorgeRelatoVideoRef, audioObj }) => {

    const [pAudio1, setPAudio1] = useState(null);
    const [pAudio2, setPAudio2] = useState(null);

    useEffect(()=>{
        audioObj[1].pause();
        audioObj[2].pause();

        if(pAudio1){
            audioObj[1].play();
        }else if(pAudio2){
            audioObj[2].play();
        }
    }, [pAudio1, pAudio2])


    const playAudio1 = ()=>{
        setPAudio1(!pAudio1);
        setPAudio2(false)
    }

    const playAudio2 = ()=>{ 
        setPAudio2(!pAudio2)
        setPAudio1(false)
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
                    <img src={(pAudio1) ? audioOnImg : audioImg} onClick={()=>{playAudio1()}} ></img>
                    <p>"Cuando llegué al Raudal"</p>
                </div>
                <div className='relatos-audio-obj'>
                    <img src={(pAudio2) ? audioOnImg : audioImg} onClick={()=>{playAudio2()}} ></img>
                    <p>"Somos nuestras propias ambulancias"</p>
                </div>
            </div>
        </div>
    )
}

export default Relatos