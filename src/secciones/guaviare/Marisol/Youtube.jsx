import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-marisol');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion marisol-youtube'>
            <div className='contenido'>
                <div>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                </div>
                <div>
                    <p>“Hay mucha mujer echada pa’lante. He tenido la oportunidad de trabajar en lo que toque”</p>
                </div>
            </div>
        </div>
    )
}

export default Youtube