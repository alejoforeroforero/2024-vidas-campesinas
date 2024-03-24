import { useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.jorge-bio',
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 0,
                markers: true,
                onEnter: () => {
                    console.log('entro jorge bio');
                }
            },
            defaults: { duration: 1 }
        })
            .fromTo('.jorge-bio', { opacity: 0.5 }, { opacity: 1, duration: 2 })
            .fromTo('.jorge-info', { opacity: 0 }, { opacity: 1, duration: 2 })
            .to('.jorge-info', { opacity: 1, duration: 2 })
            .to('.jorge-info', { opacity: 0, duration: 2 })


        return () => {
            tl.kill();
        }
    })

    return (
        <div className='jorge-bio'>
            <div className='bio-contenido'>
                <h1 className='jorge-titulo-h1'>Jorge <br />Luis Cano</h1>
                <div className='info jorge-info'>
                    <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
                </div>
                {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
            </div>
        </div>
        // <div className='seccion jorge-bio'>
        //     <div className='bio-contenido'>
        //         <h1 className='jorge-titulo-h1'>Jorge <br />Luis Cano</h1>
        //         <div className='info jorge-info'>
        //             <img onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
        //         </div>
        //         {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
        //     </div>
        // </div>


    )
}

export default Bio;