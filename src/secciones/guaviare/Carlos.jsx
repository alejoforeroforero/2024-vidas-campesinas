import { useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch } from 'react-redux';
import { establecerPersonaje } from '../../redux/states/managerSlice';

import infoImg from '../../assets/generales/biografia.png';
import carlosFoto from '../../assets/guaviare/carlos/carlos-foto.png';

import './Carlos.css';

import InfoPopup from '../../components/InfoPopup';


const Carlos = () => {

  const [showingPopup, setShowingPopup] = useState(false);

  const dispatch = useDispatch();

  const biografia = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \
  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n \n \
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod \
  asdasd'

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  return (
    <div className="seccion carlos" >
      <div className='carlos-entrada'>
        <div className='carlos-titulo'>
          <h1 className='carlos-titulo-h1'>Carlos <br />Julio Mancera</h1>
        </div>
        <div className='carlos-contenido'>
          <img className='carlos-info' onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          <img className='carlos-foto' src={carlosFoto} alt="carlos-cano" />
          {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
        </div>
      </div>
    </div>
  )
}

export default Carlos