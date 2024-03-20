import { useState } from 'react';
import YouTube from 'react-youtube';
import playImg from '../../../assets/generales/play_video.png'

import './Youtube.css';
import YoutubePortal from '../../../components/YoutubePortal';

const Youtube = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onPlayerReady = (event) => {
        //setVideoElement(event.target);
    }

    const onStateChange = () => {
        console.log('entro state change');
    }

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    const handleOnClick = () => {
        setIsOpen(true);
    }

    return (
        <div className='seccion carlos-youtube'>
            <YoutubePortal open={isOpen} onClose={() => setIsOpen(false)} >
                <div id="player-container" className='player-container'>
                    <YouTube
                        videoId="7FeSnVNixRg"
                        opts={opts}
                        onReady={onPlayerReady}
                        onStateChange={onStateChange}
                    />
                </div>
            </YoutubePortal>
            <div className='contenido'>
                <div>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                </div>
                <div>
                    <p>“En esta finca hay tierra buena y tierra mala”</p>
                </div>
            </div>
        </div>
    )
}

export default Youtube