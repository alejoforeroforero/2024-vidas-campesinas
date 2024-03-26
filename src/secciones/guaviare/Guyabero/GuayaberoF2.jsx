import playImg from '../../../assets/generales/play_video.png';
import './GuayaberoF2.css';

const GuayaberoF2 = () => {

    const handleOnClick = () => {
        alert('por resolver video youtube vertical');
    }

    return (
        <div className='guayabero-f2'>
            <img onClick={handleOnClick} src={playImg} alt="play" />
            <div className='guayabero-f2-frase'>
                <h3>“El río es fuente de vida”.</h3>
                <p>- Antonio Molano</p>
            </div>
        </div>
    )
}

export default GuayaberoF2