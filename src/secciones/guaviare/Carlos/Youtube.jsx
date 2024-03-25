
import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-carlos');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion carlos-youtube'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“En esta finca hay tierra buena y tierra mala”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube