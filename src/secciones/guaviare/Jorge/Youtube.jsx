import { useDispatch } from 'react-redux';
import { establecerYCanalA } from '../../../redux/states/managerSlice';
import playImg from '../../../assets/generales/play_video.png'
import './Youtube.css';

const Youtube = ({ youtubeRef }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const div = document.getElementById('youtube-jorge');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
        dispatch(establecerYCanalA(window.scrollY));
    }

    return (
        <div className='seccion jorge-youtube'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div className='jorge-youtube-play'>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“Éramos aserradores y cazadores, pero ahora conservamos”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube