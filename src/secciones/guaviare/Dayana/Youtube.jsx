import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {

    const handleOnClick = () => {
        const div = document.getElementById('youtube-dayana1');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
    }

    return (
        <div className='seccion dayana-youtube'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“Es importante saber de todo. Me considero pescadora.”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube