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
        <div className='seccion marisol-bio'>
            <div className='bio-contenido'>
                <h1 className='marisol-titulo-h1'>Marisol <br />Montero</h1>
                <div className='info marisol-info'>
                    <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
                </div>
                {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
            </div>
        </div>
    )
}

export default Bio;