import './LoopVideo.css'

const LoopVideo = ({ videoRef, video, vId }) => {

    return (
        <div className="relatos-video">
            <video
                ref={videoRef}
                id={vId}
                loop
                playsInline
                muted
                className="jorge-relatos-video"
                src={video}
                onTimeUpdate={()=>{console.log('hola')}}
                >
                
            </video>
        </div>
    )
}

export default LoopVideo