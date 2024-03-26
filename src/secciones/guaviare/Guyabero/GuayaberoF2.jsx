import playImg from '../../../assets/generales/play_video.png';
import './GuayaberoF2.css';

const GuayaberoF2 = () => {

    const handleOnClick = ()=>{
        alert('por resolver video youtube vertical');
    }

    return (
        <div className='guayabero-f2'>
            <img onClick={handleOnClick} src={playImg} alt="play" />
        </div>
    )
}

export default GuayaberoF2