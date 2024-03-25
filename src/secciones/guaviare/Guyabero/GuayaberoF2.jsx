import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import loop from '../../../assets/guaviare/guayabero/guayabero.mp4';
import Video from '../../../components/Video';
import './GuayaberoF2.css';
import { changeVideo } from '../../../redux/states/managerSlice';



const GuayaberoF2 = () => {

    const dispatch = useDispatch();
    const videoref = useRef(null);

    const vId = 'guayabero-video'

    // useEffect(() => {
    //     dispatch(changeVideo(vId))
    // }, []);

    return (
        <div className='guayabero-f2'>
            Video
            {/* <Video
                videoRef={videoref}
                vId={vId}
                tiempo='3000'
                video={loop}
            /> */}
        </div>
    )
}

export default GuayaberoF2