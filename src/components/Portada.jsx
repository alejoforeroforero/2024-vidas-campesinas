import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingIcons from 'react-loading-icons';

import audifonos from '../assets/generales/audifonos.png';

import './Portada.css'

const Portada = ({ handleEmpezar }) => {
    const [empezo, setEmpezo] = useState(false);

    useGSAP(() => {
        const tl1 = gsap
            .timeline()
            .to(".toogle-canal-b", {opacity:0, duration:0.2})
            .to(".portada-loader", { opacity: 0.4, duration: 2 })
            .to(".portada-loader", { y: '-100vh', opacity: 0, duration: 1 })
            .to(".portada-audifonos-img", { opacity: 1, duration: 2 }, '<1')
            .to(".portada-p1", { opacity: 1, duration: 1 }, '<1')
            .to(".portada-p2", { opacity: 1, duration: 1 }, '<0.5')
            .to(".portada-entrar-btn", { opacity: 1, duration: 4 }, '<1')

        return () => {
            tl1.kill();
        }
    }, [])

    const handleOnClick = () => {
        setEmpezo(true);
        handleEmpezar();
    }

    return (
        <>
            <div className='portada-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666" /></div>
            <div className="seccion portada">
                <div className='portada-audifonos'>
                    <img className='portada-audifonos-img' src={audifonos} alt="audifonos" />
                    <p className='portada-p1'>Esta experiencia</p>
                    <p className='portada-p2'>tiene sonido</p>
                </div>
                <div className='portada-entrar'>
                    {!empezo && <button className='portada-entrar-btn' onClick={handleOnClick}>Click para entrar</button>}
                </div>
            </div>
        </>
    )
}

export default Portada