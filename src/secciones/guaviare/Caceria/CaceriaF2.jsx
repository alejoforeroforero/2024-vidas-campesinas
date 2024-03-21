import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import loop from '../../../assets/guaviare/caceria/loop-caceria.mp4';
import LoopVideo from '../../../components/LoopVideo';
import './CaceriaF2.css';
import { changeVideo } from '../../../redux/states/managerSlice';
import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audioCaceria from '../../../assets/guaviare/caceria/audio-caceria.mp3';


const CaceriaF2 = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const dispatch = useDispatch();
    const videoref = useRef(null);
    const audioRef = useRef(null);

    const vId = 'caceria-video'

    useEffect(() => {
        dispatch(changeVideo(vId))
    }, []);

    useEffect(()=>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
    }, [isPlaying])


    return (
        <div className='caceria-f2'>
            <LoopVideo
                videoRef={videoref}
                vId={vId}
                tiempo='3000'
                video={loop}
            />
            <h2>“En ese tiempo se trabajaba con las pieles del tigrillo y el cachirre”</h2>
            <div className='caceria-audio-contenedor'>
                <div className='relatos-audio-obj'>
                    <audio ref={audioRef} src={audioCaceria} controls></audio>
                    <img src={(!isPlaying) ? audioOnImg : audioImg} onClick={()=>setIsPlaying(!isPlaying)}></img>
                    <p>“Relato cacería”</p>
                </div>
            </div>

        </div>
    )
}

export default CaceriaF2