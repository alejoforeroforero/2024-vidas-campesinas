import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingIcons from 'react-loading-icons';


import logo from '../../assets/guaviare/gv1/gv1-logo.png';
import scroll from '../../assets/generales/scroll.png';
import audifonos from '../../assets/guaviare/gv1/gv1-audifonos.png';

import './Gv1.css'

const Gv1 = () => {
    const [empezo, setEmpezo] = useState(false);

    useGSAP(() => {
        const tl1 = gsap
            .timeline()
            .to(".gv1-loader", {opacity:0.4, duration:4})
            .to(".gv1-loader", {y:'-100vh', opacity:0, duration:2})
            .fromTo(".gv1-logo", { opacity: 0, y: 40 }, { opacity: 1, y: 10, duration: 6, ease: 'back' })
            .to(".gv1-audifonos-img", { opacity: 1, duration: 2 }, '<2')
            .to(".gv1-p1", { opacity: 1, duration: 1 }, '<1')
            .to(".gv1-p2", { opacity: 1, duration: 1 }, '<0.5')
            .to(".gv1-entrar-btn", { opacity: 1, duration: 1 }, '<0.5')

        return () => {
            tl1.kill();
        }
    }, [])

    return (
        <>
            <div className='gv1-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666"/></div>
            <div className="seccion gv1">
                <div className='gv1-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gv1-audifonos'>
                    <img className='gv1-audifonos-img' src={audifonos} alt="audifonos" />
                    <p className='gv1-p1'>Esta experiencia</p>
                    <p className='gv1-p2'>tiene sonido</p>
                </div>
                <div className='gv1-entrar'>
                    {!empezo && <button className='gv1-entrar-btn' onClick={() => { setEmpezo(true) }}>Click para entrar</button>}
                    {empezo && <img src={scroll} alt="scroll" />}
                </div>
            </div>
        </>
    )
}

export default Gv1