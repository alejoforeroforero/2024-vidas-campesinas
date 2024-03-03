import { useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import infoImg from '../../assets/generales/biografia.png';
import jorgeFoto from '../../assets/guaviare/jorge/jorge-cano.png';
import './Jorge.css';

import InfoPopup from '../../components/InfoPopup';

const Jorge = () => {

  const [showingPopup, setShowingPopup] = useState(false)

  const biografia = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \
  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n \n \
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod \
  asdasd'

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".jorge",
          start: `top top`,
          end: "+=1000",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false
        }
      })
      .fromTo(".jorge-titulo", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 20, ease: 'rough' })
      .fromTo(".jorge-foto", { x: 180, y: 170 }, { x: 0, y: 0, duration: 20, ease: 'back' })
      .fromTo(".jorge-info", { opacity: 0 }, { opacity: 1, duration: 10, ease: 'rough' }, '<4')


    return () => {
      tl.kill();
    }
  }, [])

  return (
    <div className="seccion jorge" >
      <div className='jorge-titulo'>
        <h1 className='jorge-titulo-h1'>Jorge <br />Luis Cano</h1>
      </div>
      <div className='jorge-contenido'>
        <img className='jorge-info' onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
        <img className='jorge-foto' src={jorgeFoto} alt="jorge-cano" />
        {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
      </div>
    </div>
  )
}

export default Jorge