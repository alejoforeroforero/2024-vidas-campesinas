import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cambiarDepartamento, establecerPersonaje, cambiarYotube } from '../../redux/states/managerSlice';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { crearAudioPlayer } from './components/RelatosPlayer';

import GuaviareEntrada from './GuaviareEntrada';
import JorgeBio from './Jorge/Bio';
import JorgeYoutube from './Jorge/Youtube';
import JorgeRelatos from './Jorge/Relatos';
import JorgeGaleria from './Jorge/Galeria';

import LoadingIcons from 'react-loading-icons';

import './GuaviareHome.css'


const GuaviareHome = ({ videoGuaviareRef }) => {
  const dispatch = useDispatch();
  const [esconderLoading, setEsconderLoading] = useState(false);
  const audioObj = crearAudioPlayer();

  const playAudio = (index) => {
    if(!audioObj[index].playing()){
      audioObj[index].play();
    }
  }

  const pausarAudio = (index) => {
    if(audioObj[index].playing()){
      audioObj[index].pause();
    }
  }

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);
    }, 2000)

    return () => clearTimeout(timer);
  })
  // const tempo = 4;
  const tempo = 2;
  const personaje = useSelector(state => state.managerReducer.personaje);
  const jorgeRelatoVideoRef = useRef(null);


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
          trigger: ".guaviare-gsap",
          start: `top top`,
          end: "+=20200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false,
          onEnter: () => {
            videoGuaviareRef.current.play();
          }
        }
      })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".logo", { opacity: 0, y: -70, duration: tempo * 2 })
      .to(".scroll", { opacity: 0, y: 70, duration: tempo * 3 }, '<1')
      .to(".logo", { visibility: 'hidden', duration: 1 })
      .to(".scroll", { visibility: 'hidden', duration: 1 })
      .to(".guaviare-contenido", { opacity: 1, duration: tempo * 3 })
      .to(".guaviare-descripcion-p1", { opacity: 0, duration: tempo * 3 })
      .to(".guaviare-descripcion-p2", { opacity: 1, duration: tempo * 3 }, `<${tempo * 2}`)
      .to(".guaviare", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".jorge-bio", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<')
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .call(() => {
        videoGuaviareRef.current.pause();
        dispatch(establecerPersonaje('linea-jorge'));
        playAudio(0);
      })
      .fromTo(".jorge-bio", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 2 })
      .to(".jorge-bio", { opacity: 0, zIndex: 1, duration: tempo * 3 })
      .fromTo(".jorge-youtube", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 3 }, '<5')
      .call(() => {
        pausarAudio(0);
      })
      .fromTo(".jorge-youtube", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 2 })
      .to(".jorge-youtube", { opacity: 1, zIndex: 2, duration: tempo * 2 })
      .to(".jorge-youtube", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".jorge-relatos", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<1')
      .call(() => {
        jorgeRelatoVideoRef.current.pause();
      })
      .call(() => {
        jorgeRelatoVideoRef.current.play();
      })
      .fromTo(".jorge-relatos", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 3 })
      .fromTo(".jorge-relatos", { opacity: 1 }, { opacity: 0, zIndex: 1, duration: tempo * 3 })
      .fromTo(".jorge-galeria", { opacity: 0 }, { opacity: 1, zIndex: 1, duration: tempo * 3 })

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
      <div className='guaviare-gsap'>
        <div className='guaviare-contenedor-general'>
          <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
          <JorgeBio />
          <JorgeYoutube />
          <JorgeRelatos
            jorgeRelatoVideoRef={jorgeRelatoVideoRef}
            audioObj={audioObj}
          />
          <JorgeGaleria />
        </div>
      </div>
    </>
  )
}

export default GuaviareHome