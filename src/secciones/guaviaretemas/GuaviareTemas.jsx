import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarYotube,
  escogerCancion,
} from '../../redux/states/managerSlice';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


import LoadingIcons from 'react-loading-icons';

import './GuaviareTemas.css';
import Caceria from './Caceria/Caceria';

const GuaviareTemas = ({seccionBRef}) => {

  const dispatch = useDispatch();

  const [esconderLoading, setEsconderLoading] = useState(false); 
  const videoCaceriaRef = useRef(null); 

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare-temas'))
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);      
    }, 2000);

    const timerScroll = setTimeout(()=>{
      // window.scrollTo({ top: yCanalA, behavior: 'smooth' });
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerScroll);
    }
  }, [])

  const tempo = 2;

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".guaviare-temas-gsap",
          start: `top top`,
          end: "+=20200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: true,
          onEnter: () => {
            videoCaceriaRef.current.play();
          },
          // onUpdate:(self)=>{

          // }
        }
      })

    return () => {
      tl.kill();
    }
  }, [])

  return (
    <>
      {!esconderLoading &&
        <div className='portada-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666" /></div>
      }
      <div className='guaviare-temas-gsap'>
        <div className='guaviare-temas-contenedor-general'>
          <Caceria videoCaceriaRef={videoCaceriaRef} />
          {/* <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
          <div id='guaviare-jorge-navegacion'>
            <JorgeBio />
          </div>
          <JorgeYoutube />
          <JorgeRelatos jorgeRelatoVideoRef={jorgeRelatoVideoRef} />
          <JorgeGaleria /> */}
        </div>
      </div>

    </>
  )
}

export default GuaviareTemas