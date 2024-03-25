import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-william');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion william-youtube'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“Yo cultivé coca, pero es mejor la agricultura. Es mejor lo legal”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube