import { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import YouTube from "react-youtube";
import playImg from '../assets/generales/play_video.png';
import salidaImg from '../assets/generales/salida.png';
import pauseImg from '../assets/generales/pause_video.png';
import LoadingIcons from 'react-loading-icons';

import './YT.css';

const YT = ({ youtubeVideoId, refYoutubeFx, imgThumbnail, id }) => {

    const yCanalA = useSelector(state => state.managerReducer.yCanalA);

    const [video, setVideo] = useState(null);
    const [showControls, setShowControls] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonsReady, setButtonsReady] = useState(false);
    const [mostrarMask, setMostrarMask] = useState(true);
    const [booleano, setBooleano] = useState(false);
    const [clickEvent, setClickEvent] = useState(0);

    const parentRef = useRef(null);
    const imgThumbnailRef = useRef(null);
    const progressBarRef = useRef(null);
    const timerId = useRef(null);
    const intervalId = useRef(null);

    useEffect(() => {
        setButtonsReady(true);
        if (showControls) {
            timerId.current = setTimeout(() => {
                if (isPlaying) {
                    setShowControls(false);
                    setButtonsReady(false);
                }
            }, 3000);
        };
        return () => {
            clearTimeout(timerId.current)
        }
    }, [clickEvent])

    useEffect(() => {
        if (isPlaying) {
            intervalId.current = setInterval(() => {
                const percentage = video.getCurrentTime() * 100 / video.getDuration();
                const leftPosPx = parentRef.current.offsetWidth * percentage / 100;
                progressBarRef.current.style.width = leftPosPx + 'px';
            }, 500)
        } else {
            clearInterval(intervalId.current)
        }

        return () => {
            clearInterval(intervalId.current)
        }
    }, [isPlaying])

    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };

    const onPlayerReady = (event) => {
        setVideo(event.target);
        setButtonsReady(true);
        setShowControls(true);
        refYoutubeFx(event.target);
    }

    const onStateChange = (e) => {
        // console.log('entro state change');
        // console.log(e);
    }

    const handleOnPlay = (e) => {
        setShowControls(false);
        setIsPlaying(true);
        imgThumbnailRef.current.style.visibility = 'hidden';

        setTimeout(() => {
            setMostrarMask(false)
        }, 1000);
    }

    const handleGeneralOnClick = () => {
        setShowControls(true);
        setClickEvent(clickEvent + 1)
    }

    const handleIconOnClick = () => {
        if (buttonsReady) {
            setIsPlaying(!isPlaying);
            if (isPlaying) {
                video.pauseVideo();
                imgThumbnailRef.current.style.visibility = 'visible';
            } else {
                video.playVideo();
                imgThumbnailRef.current.style.visibility = 'hidden';
            }
        }
    }

    const handleBarraOnClick = (e) => {
        if (buttonsReady) {

            const posLeft = e.target.getBoundingClientRect().x;
            const width = e.target.getBoundingClientRect().width;
            let percentage = (e.pageX - posLeft) * 100 / width;
            const duration = video.getDuration();
            const finalPos = percentage * duration / 100;

            // const posLeft = e.target.getBoundingClientRect().y;
            // const width = e.target.getBoundingClientRect().height;
            // let percentage = (e.pageY - posLeft) * 100 / width;
            // const duration = video.getDuration();
            // const finalPos = percentage * duration / 100;

            if (percentage < 5) {
                percentage = 0;
            }
            video.seekTo(finalPos);
        }
    }

    const handleOnCerrar = () => {
        const div = document.getElementById(id);
        div.style.animation = booleano ? 'fadeOut 1s' : 'fadeOut2 1s';           

        setTimeout(() => {
            setIsPlaying(false);
            setShowControls(false); 
            setMostrarMask(true);
            video.pauseVideo(); 
            setBooleano(!booleano);
            imgThumbnailRef.current.style.visibility = 'hidden';
            div.style.visibility = 'hidden'; 
            window.scrollTo({ top: yCanalA, behavior: 'smooth' }); 
        }, 980);
    }

    const handleOnEnd = () => {
        video.pauseVideo();
        video.seekTo(0);
        setIsPlaying(false);
        setShowControls(true);        
        setTimeout(() => {
            imgThumbnailRef.current.style.visibility = 'visible';            
        }, 100)
    }

    const drawControls = () => {
        return (
            <div onClick={handleGeneralOnClick} className='video-controls' style={{ opacity: showControls ? '1' : '0' }}>
                <div className="player-cerrar">
                     <img onClick={handleOnCerrar} src={salidaImg} alt="play" />
                </div>
                <div className='video-play-img-container'>
                    {isPlaying && 
                        <img onClick={handleIconOnClick} src={pauseImg} alt="play" />
                    }
                    {!isPlaying && 
                        <img onClick={handleIconOnClick} src={playImg} alt="play" />
                    }
                </div>
                <div className='video-img-container'>
                    <img ref={imgThumbnailRef} src={imgThumbnail}></img>
                </div>

                <div style={{ visibility: isPlaying ? 'visible' : 'hidden' }} className='bar-container'>
                    <div className='bar-background' />
                    <div ref={progressBarRef} className='bar-progress' />
                    <div onClick={handleBarraOnClick} className='bar-onclick' />
                </div>
            </div>
        )
    }

    return (
        <div ref={parentRef} id="player-container" className='player-container'>
            {mostrarMask &&
                <div className="player-mask">
                    <LoadingIcons.ThreeDots stroke="#888" fill="666" />
                </div>
            }

            <YouTube
                videoId={youtubeVideoId}
                opts={opts}
                onReady={onPlayerReady}
                onStateChange={onStateChange}
                onEnd={handleOnEnd}
                onPlay={handleOnPlay}
            />
            {drawControls()}
        </div>
    )
}

export default YT;