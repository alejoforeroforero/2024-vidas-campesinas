
import playImg from '../../../assets/generales/play_video.png'
import './Youtube2.css';

const Youtube = ({youtubeRef}) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-dayana2');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion dayana-youtube2'>
            <div className='contenido'>
                <div>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                </div>
                <div>
                    <p>“Señor Pronto alivio”</p>
                </div>
            </div>
        </div>
    )
}

export default Youtube