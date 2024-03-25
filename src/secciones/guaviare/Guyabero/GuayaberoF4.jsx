import { useEffect, useRef, useState } from 'react';

import audioOnImg from '../../../assets/generales/audio-on.png'
import audioImg from '../../../assets/generales/audio.png';
import audio2 from '../../../assets/guaviare/guayabero/audio-toninas.mp3';
import delfinImg from '../../../assets/guaviare/guayabero/delfin.png';

import './GuayaberoF4.css';

const GuayaberoF4 = () => {

    const [isPlaying2, setIsPlaying2] = useState(true);

    const audioRef2 = useRef(null);


    useEffect(() => {
        if (isPlaying2) {
            audioRef2.current.pause();
        } else {
            audioRef2.current.play();
        }
    }, [isPlaying2])


    return (
        <div className='guayabero-f4'>
            <div className='guayabero-f4-mask'>

            </div>
            <div className='guayabero-toninas-frase'>
                <div>
                    <h2>“No se podía meter el remo porque se tropezaba con las Toninas”.</h2>
                </div>
                <div className='guayabero-toninas-autor'>
                    <p>- Carmen Montero</p>
                </div>

            </div>
            <div className='guayabero-f4-ilustraciones'>
                <img src={delfinImg} alt="delfinImg" />
            </div>
            <div className='guayabero-audio-contenedor2'>
                <div className='relatos-audio-obj'>
                    <audio ref={audioRef2} src={audio2} controls></audio>
                    <div className='relatos-audio-obj-top'>
                        <img src={(!isPlaying2) ? audioOnImg : audioImg} onClick={() => setIsPlaying2(!isPlaying2)}></img>
                        <h2>“Las Toninas se dispersaron por los otros ríos, como son territoriales”.</h2>
                    </div>
                    <p>- Jorge Cano</p>
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

export default GuayaberoF4