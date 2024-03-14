import { useEffect, useRef } from 'react';
import LoopVideo from '../../../components/LoopVideo';

import caceriaLoopVideo from '../../../assets/guaviare/caceria/loop.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';

import './CaceriaIntro.css';


const CaceriaIntro = () => {

    const caceriaLoop = useRef(null)

    useEffect(()=>{
        const timer = setTimeout(() => {
            caceriaLoop.current.play();
        }, 5000)

        return () => clearTimeout(timer);
    },[])

    return (
        <div className='guaviare-caceria'>
            <div className="guaviare-caceria-intro">
                    Hola amigos
            </div>
            <LoopVideo
                videoRef={caceriaLoop}
                tiempo='3000'
                video={caceriaLoopVideo}
                poster={videoGuaviarePoster}
            />
        </div>
    )
}

export default CaceriaIntro