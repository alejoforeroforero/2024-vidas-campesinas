import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-jorge');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion jorge-youtube'>
            <div className='contenido'>
                <div className='jorge-youtube-play'>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                </div>
                <div>
                    <p>“Éramos aserradores y cazadores, pero ahora conservamos”</p>
                </div>
            </div>
        </div>
    )
}

export default Youtube