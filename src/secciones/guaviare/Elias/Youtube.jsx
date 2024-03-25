import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-elias');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion elias-youtube'>
            <div className='contenido'>
                <div>
                    <img onClick={handleOnClick} src={playImg} alt="play" />
                </div>
                <div>
                    <p>“Estas pinturas significan una cultura muy valiosa, a la cual admiro y respeto. Nadie sabe exactamente cómo se hicieron”</p>
                </div>
            </div>
        </div>
    )
}

export default Youtube