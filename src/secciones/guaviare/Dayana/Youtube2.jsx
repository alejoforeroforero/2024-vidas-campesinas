import { useDispatch } from 'react-redux';
import { establecerYCanalA } from '../../../redux/states/managerSlice';
import playImg from '../../../assets/generales/play_video.png'
import './Youtube2.css';

const Youtube = ({ youtubeRef }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const div = document.getElementById('youtube-dayana2');
        div.style.visibility = 'visible';
        youtubeRef.playVideo();
        dispatch(establecerYCanalA(window.scrollY));
    }

    return (
        <div className='seccion dayana-youtube2'>
            <div className='mask-general'>
                <div className='youtube-contenido'>
                    <div>
                        <img onClick={handleOnClick} src={playImg} alt="play" />
                    </div>
                    <div>
                        <p>“Señor Pronto alivio”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube