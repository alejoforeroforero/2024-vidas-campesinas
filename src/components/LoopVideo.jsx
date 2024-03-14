import { useEffect, useState } from 'react'
import './LoopVideo.css'

const LoopVideo = ({ videoRef, tiempo, video, poster }) => {

    const [mostrarVideo, setMostrarVideo] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarVideo(true);
        }, tiempo)

        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="relatos-video">
            {!mostrarVideo && <div> descargando </div>}
            {mostrarVideo &&
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    muted
                    className="jorge-relatos-video"
                    src={video}>
                    poster={poster}
                </video>
            }
        </div>
    )
}

export default LoopVideo