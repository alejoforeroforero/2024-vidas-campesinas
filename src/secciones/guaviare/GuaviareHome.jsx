import { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import GuaviareEntrada from './GuaviareEntrada';
import Jorge from './Jorge';
import Carlos from './Carlos';
import LoadingIcons from 'react-loading-icons';

import './GuaviareHome.css'

const GuaviareHome = ({ videoGuaviareRef }) => {

  const [esconderLoading, setEsconderLoading] = useState(false);

  const personaje = useSelector(state => state.managerReducer.personaje);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      setEsconderLoading(true)
    }, 2000)
  })

  const lineas = [
    {
      id: 'linea-jorge',
      titulo: 'Jorge Cano'
    },
    {
      id: 'linea-carlos',
      titulo: 'Carlos Mancera'
    },
  ]

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".guaviare-contenedor-general",
          start: `top top`,
          end: "+=8200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false,
          onEnter:()=>{
            console.log('entro');
            videoGuaviareRef.current.play();
          }
        }
      })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".logo", { opacity: 0, y: -70, duration: 10 })
      .to(".scroll", { opacity: 0, y: 70, duration: 15 }, '<1')
      .to(".guaviare-contenido", { opacity: 1, duration: 15 })
      .to(".guaviare-contenido", { opacity: 1, duration: 15 })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".guaviare-contenido", { opacity: 0, duration: 15 })      
      .call(() => {
        videoGuaviareRef.current.pause();
      })
      .to(".guaviare", { opacity: 0, duration: 15 })
      .fromTo(".jorge", {opacity:0},{opacity:1}, 15)

    return () => {
      tl.kill();
    }
  }, [])



  return (
    <>
      {!esconderLoading &&
        <div className='portada-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666" /></div>
      }

      <div className='guaviare-lineas'>
        {lineas.map(linea => {
          return <div key={linea.id}
            className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
          />
        })}
      </div>
      <div className='guaviare-contenedor-general'>
        <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
        <Jorge />
        <Carlos />
      </div>

    </>
  )
}

export default GuaviareHome