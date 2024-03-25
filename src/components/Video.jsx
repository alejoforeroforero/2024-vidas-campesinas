import './Video.css'

const Video = ({ videoRef, video, vId }) => {

    return (
        <div className="videos-verticales">
            <video
                ref={videoRef}
                id={vId}
                className="jorge-relatos-video"
                src={video}
                controls
                onTimeUpdate={()=>{console.log('hola video vertical')}}
                >                
            </video>
        </div>
    )
}

export default Video