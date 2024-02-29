import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingIcons from 'react-loading-icons';

import audifonos from '../../assets/guaviare/gv1/gv1-audifonos.png';

import './Gv1.css'

const Gv1 = ({gv2Ref, handleEmpezar}) => {
    const [empezo, setEmpezo] = useState(false);

    useGSAP(() => {
        const tl1 = gsap
            .timeline()
            .to(".gv1-loader", {opacity:0.4, duration:2})
            .to(".gv1-loader", {y:'-100vh', opacity:0, duration:1})
            .fromTo(".logo", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 5, ease: 'back' })
            .to(".gv1-audifonos-img", { opacity: 1, duration: 2 }, '<1')
            .to(".gv1-p1", { opacity: 1, duration: 1 }, '<1')
            .to(".gv1-p2", { opacity: 1, duration: 1 }, '<0.5')
            .to(".gv1-entrar-btn", { opacity: 1, duration: 4 }, '<1')

        return () => {
            tl1.kill();
        }
    }, [])

    const handleOnClick = ()=>{
        setEmpezo(true);
        handleEmpezar();  
    }

    return (
        <>
            <div className='gv1-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666"/></div>
            <div className="seccion gv1">
                <div className='gv1-audifonos'>
                    <img className='gv1-audifonos-img' src={audifonos} alt="audifonos" />
                    <p className='gv1-p1'>Esta experiencia</p>
                    <p className='gv1-p2'>tiene sonido</p>
                </div>
                <div className='gv1-entrar'>
                    {!empezo && <button className='gv1-entrar-btn' onClick={handleOnClick}>Click para entrar</button>}
                </div>
            </div>
        </>
    )
}

export default Gv1