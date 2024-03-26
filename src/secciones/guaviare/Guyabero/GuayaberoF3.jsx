import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo } from '../../../redux/states/managerSlice';
import LoopVideo from '../../../components/LoopVideo';
import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audio1 from '../../../assets/guaviare/guayabero/audio-guayabero1.mp3';
import audio2 from '../../../assets/guaviare/guayabero/audio-guayabero2.mp3';
import lanchaImg from '../../../assets/guaviare/guayabero/lancha.png';
import loop from '../../../assets/guaviare/guayabero/guayabero-loop.mp4';

import './GuayaberoF3.css';

const GuayaberoF3 = () => {

    const dispatch = useDispatch();
    const videoref = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isPlaying2, setIsPlaying2] = useState(true);

    const audioRef = useRef(null);
    const audioRef2 = useRef(null);

    const vId = 'guyabero-video'

    useEffect(() => {
        dispatch(changeVideo(vId))
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [isPlaying])

    useEffect(() => {
        if (isPlaying2) {
            audioRef2.current.pause();
        } else {
            audioRef2.current.play();
        }
    }, [isPlaying2])

    return (
        <div className='guayabero-f3'>
            <LoopVideo
                videoRef={videoref}
                vId={vId}
                tiempo='3000'
                video={loop}
            />
            <div className='mask-general'>
                <div className='guayabero-f3-interior'>
                    <div className='guayabero-audio-contenedor1'>
                        <div className='relatos-audio-obj'>
                            <audio ref={audioRef} src={audio1} controls></audio>
                            <div className='relatos-audio-obj-top'>
                                <img src={(!isPlaying) ? audioOnImg : audioImg} onClick={() => setIsPlaying(!isPlaying)}></img>
                                <h2>“Yo me acuerdo que en verano se escuchaba la cantidad de pescado subiendo el río”.</h2>
                            </div>
                            <p>- Disney Ardila</p>
                            {!isPlaying &&
                                <div className='audio-visual'>
                                    {/* <iframe src="https://giphy.com/embed/UGrpkMXipFWQ06IHIM"></iframe> */
                                        //https://giphy.com/embed/2mnoi0YXJdi2um7FTs/video
                                        // https://giphy.com/embed/9G1jYrLDMATYhV9ojO
                                    }
                                    <iframe src="https://giphy.com/embed/2mnoi0YXJdi2um7FTs/video" frameBorder="0" ></iframe>

                                </div>
                            }
                        </div>
                        <p></p>
                    </div>
                    <div className='guayabero-f3-ilustraciones'>
                        <img src={lanchaImg} alt="jaguar" />
                    </div>
                    <div className='guayabero-audio-contenedor2'>
                        <div className='relatos-audio-obj'>
                            <audio ref={audioRef2} src={audio2} controls></audio>
                            <div className='relatos-audio-obj-top'>
                                <img src={(!isPlaying2) ? audioOnImg : audioImg} onClick={() => setIsPlaying2(!isPlaying2)}></img>
                                <h2>“Uno en la noche pescaba 20 o 30 arrobas en dos horas”.</h2>
                            </div>
                            <p>- Carlos Mancera</p>
                            {!isPlaying2 &&
                                <div className='audio-visual'>
                                    {/* <iframe src="https://giphy.com/embed/UGrpkMXipFWQ06IHIM"></iframe> */
                                        //https://giphy.com/embed/2mnoi0YXJdi2um7FTs/video
                                        // https://giphy.com/embed/9G1jYrLDMATYhV9ojO
                                    }
                                    <iframe src="https://giphy.com/embed/2mnoi0YXJdi2um7FTs/video" frameBorder="0" ></iframe>
                                </div>
                            }
                        </div>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GuayaberoF3