import { useState } from 'react';
import InfoPopup from '../../../components/InfoPopup';

import infoImg from '../../../assets/generales/biografia.png';

import './Bio.css'

const Bio = () => {

    const [showingPopup, setShowingPopup] = useState(false);

    const biografia = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \
  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n \n \
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod \
  asdasd'

    const handleClosePopup = () => {
        setShowingPopup(false)
    }

    return (
        <div className='seccion carlos-bio'>
            <div className='mask-general'>
                <div className='bio-contenido'>
                    <h1 className='carlos-titulo-h1'>Carlos <br />Julio Mancera</h1>
                    <p>“Ya no podemos cultivar mucho. Ahora nos buscamos la comida con el turismo”</p>
                    <div className='info carlos-info'>
                        <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
                    </div>
                </div>
            </div>
            {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
        </div>
    )
}

export default Bio;