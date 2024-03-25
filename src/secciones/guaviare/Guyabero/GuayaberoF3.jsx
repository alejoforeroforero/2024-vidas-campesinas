import { useEffect, useRef, useState } from 'react';

import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audio1 from '../../../assets/guaviare/guayabero/audio-guayabero1.mp3';
import audio2 from '../../../assets/guaviare/guayabero/audio-guayabero2.mp3';
import lanchaImg from '../../../assets/guaviare/guayabero/lancha.png';


import './GuayaberoF3.css';


const GuayaberoF3 = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPlaying2, setIsPlaying2] = useState(true);

    const audioRef = useRef(null);
    const audioRef2 = useRef(null);

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
            <div className='guayabero-f3-mask'>

            </div>
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



            {/* <div className='seccion-b-abajo'>
                <img src={abajoImg} alt="abajo" />
            </div> */}

        </div>
    )
}

export default GuayaberoF3