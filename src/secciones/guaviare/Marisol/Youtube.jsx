import { useDispatch } from 'react-redux';
import { establecerYCanalA } from '../../../redux/states/managerSlice';
import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const div = document.getElementById('youtube-marisol');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
        dispatch(establecerYCanalA(window.scrollY));
    }

    return (
        <div className='seccion marisol-youtube'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“Hay mucha mujer echada pa’lante. He tenido la oportunidad de trabajar en lo que toque”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube