import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarYotube,
  escogerCancion,
} from '../../redux/states/managerSlice';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { crearAudioPlayer } from './components/RelatosPlayer';

import GuaviareEntrada from './GuaviareEntrada';
import JorgeBio from './Jorge/Bio';
import JorgeYoutube from './Jorge/Youtube';
import JorgeRelatos from './Jorge/Relatos';
import JorgeGaleria from './Jorge/Galeria';

import CarlosBio from './Carlos/Bio';
import CarlosYoutube from './Carlos/Youtube';
import CarlosRelatos from './Carlos/Relatos';
import CarlosGaleria from './Carlos/Galeria';

import LoadingIcons from 'react-loading-icons';

import './GuaviareHome.css'


const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  // const tempo = 4;
  const duracionPrimerST = 5000;
  const duracionTotal = 5000;
  const tempo = 1;
  const yCanalA = useSelector(state => state.managerReducer.yCanalA);
  const personaje = useSelector(state => state.managerReducer.personaje);
  const cancionActual = useSelector(state => state.managerReducer.cancionActual);
  const cancionAnterior = useSelector(state => state.managerReducer.cancionAnterior);
  const [esconderLoading, setEsconderLoading] = useState(false);
  const jorgeRelatoVideoRef = useRef(null);
  const audioObj = crearAudioPlayer();
  const carlosRelatoVideoRef = useRef(null);

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);
    }, 2000);

    const timerScroll = setTimeout(() => {
      window.scrollTo({ top: yCanalA, behavior: 'smooth' });
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerScroll);
    }
  }, [])

  useEffect(() => {
    if (cancionAnterior != null) {
      audioObj[cancionAnterior].pause();
    }

    if (cancionActual != null) {
      audioObj[cancionActual].play();
    }
  }, [cancionActual])


  const lineas = [
    {
      id: 'linea-jorge',
      titulo: 'Jorge Cano',
      navegacion: 'guaviare-jorge-navegacion'
    },
    {
      id: 'linea-carlos',
      titulo: 'Carlos Mancera',
      navegacion: 'guaviare-carlos-navegacion'
    },
  ]

  const handleNavegacion = (id) => {
    window.scrollTo({ top: 7000, behavior: 'auto' });
  }

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".guaviare-jorge-gsap",
          start: `top top`,
          end: `+=${duracionPrimerST}`,
          invalidateOnRefresh: false,
          scrub: 0,
          pin: true,
          markers: false,
          onEnter: () => {
            videoGuaviareRef.current.play();
          },
        }
      })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".logo", { opacity: 0, y: -70, duration: tempo * 1.3 })
      .to(".scroll", { opacity: 0, y: 70, duration: tempo * 1.8 }, '<1')
      .to(".logo", { visibility: 'hidden', duration: 1 })
      .to(".scroll", { visibility: 'hidden', duration: 1 })
      .to(".guaviare-contenido", { opacity: 1, duration: tempo * 3 })
      .to(".guaviare-descripcion-p1", { opacity: 0, duration: tempo * 3 })
      .to(".guaviare-descripcion-p2", { opacity: 1, duration: tempo * 3 }, `<${tempo * 2}`)
      .to(".guaviare", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".jorge-bio", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<')
      .call(() => {
        videoGuaviareRef.current.play();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        videoGuaviareRef.current.pause();
        dispatch(establecerPersonaje('linea-jorge'));
        dispatch(escogerCancion(0))
      })
      .fromTo(".jorge-bio", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 2 })
      .to(".jorge-bio", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".jorge-youtube", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<0.5')
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .fromTo(".jorge-youtube", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 1 })
      .to(".jorge-youtube", { opacity: 1, zIndex: 2, duration: tempo * 1 })
      .to(".jorge-youtube", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".jorge-relatos", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<1')
      .call(() => {
        jorgeRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        jorgeRelatoVideoRef.current.play();
      })
      .fromTo(".jorge-relatos", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 3 })
      .fromTo(".jorge-relatos", { opacity: 1 }, { opacity: 0, zIndex: 1, duration: tempo * 3 })
      .fromTo(".jorge-galeria", { opacity: 0 }, { opacity: 1, zIndex: 2, duration: tempo * 3 })
      .to(".jorge-galeria", { opacity: 0, zIndex: 1, duration: tempo * 2 })

    const tl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".guaviare-carlos-gsap",
          start: `top top`,
          end: `+=${duracionTotal}`,
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false,
          onEnter: () => {
            //videoGuaviareRef.current.play();
          },
        }
      })
      .fromTo(".carlos-bio", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<')
      .call(() => {
        // videoGuaviareRef.current.play();
        // dispatch(escogerCancion(null))
      })
      .call(() => {
        dispatch(establecerPersonaje('linea-carlos'));
        dispatch(escogerCancion(0))
      })
      .fromTo(".carlos-bio", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 2 })
      .to(".carlos-bio", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".carlos-youtube", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<0.5')
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .fromTo(".carlos-youtube", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 1 })
      .to(".carlos-youtube", { opacity: 1, zIndex: 2, duration: tempo * 1 })
      .to(".carlos-youtube", { opacity: 0, zIndex: 1, duration: tempo * 2 })
      .fromTo(".carlos-relatos", { opacity: 0 }, { opacity: 0.5, zIndex: 1, duration: tempo * 2 }, '<1')
      .call(() => {
        carlosRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        carlosRelatoVideoRef.current.play();
      })
      .fromTo(".carlos-relatos", { opacity: 0.5 }, { opacity: 1, zIndex: 2, duration: tempo * 3 })
      .fromTo(".carlos-relatos", { opacity: 1 }, { opacity: 0, zIndex: 1, duration: tempo * 3 })
      .fromTo(".carlos-galeria", { opacity: 0 }, { opacity: 1, zIndex: 2, duration: tempo * 3 }, '<')
      .fromTo(".carlos-galeria", { opacity: 1}, { opacity: 0, zIndex: 2, duration: tempo * 1 })
    return () => {
      tl.kill();
      tl2.kill();
    }
  }, [])

  return (
    <>
      {!esconderLoading &&
        <div className='portada-loader'><LoadingIcons.ThreeDots stroke="#888" fill="666" /></div>
      }

      <div className='guaviare-lineas'>
        {lineas.map(linea => {
          return <div
            onClick={() => { handleNavegacion(linea.navegacion) }}
            key={linea.id}
            className={personaje === linea.id ? 'linea linea-seleccionada' : 'linea'}
          />
        })}
      </div>
      <div className='guaviare-gsap'>
        <div className='guaviare-contenedor-general'>
          <div className='guaviare-jorge-gsap'>
            <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
            <div id='guaviare-jorge-navegacion'>
              <JorgeBio />
            </div>
            <JorgeYoutube />
            <JorgeRelatos jorgeRelatoVideoRef={jorgeRelatoVideoRef} />
            <JorgeGaleria />
          </div>
          <div className='guaviare-carlos-gsap'>
            <div id='guaviare-carlos-navegacion'>
              <CarlosBio />
            </div>
            <CarlosYoutube />
            <CarlosRelatos carlosRelatoVideoRef={carlosRelatoVideoRef} />
            <CarlosGaleria />
          </div>
        </div>
      </div>
    </>
  )
}

export default GuaviareHome