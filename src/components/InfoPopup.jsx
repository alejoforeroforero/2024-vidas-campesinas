import { useRef, useEffect } from 'react'
import salida from '../assets/generales/salida.png';
import './InfoPopup.css';

const InfoPopup = ({biografia, handleClosePopup}) => {

    const biografiaObj = useRef(null);

    useEffect(()=>{
        biografiaObj.current.innerText = biografia;
    }, [biografia])

    return (
        <div className='info-popup'>
            <div className='info-salida'>
                <img onClick={()=>handleClosePopup()} src={salida} alt="salida" />
            </div>
            <p ref={biografiaObj}></p> 
        </div>
    )
}

export default InfoPopup