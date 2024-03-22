import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  cambiarDepartamento,
  establecerPersonaje,
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

import DayanaBio from './Dayana/Bio';
import DayanaYoutube1 from './Dayana/Youtube';
import DayanaYoutube2 from './Dayana/Youtube2';
import DayanaGaleria from './Dayana/Galeria';

import WilliamBio from './William/Bio';
import WilliamYoutube from './William/Youtube';
import WilliamRelatos from './William/Relatos';
import WilliamGaleria from './William/Galeria';

import LoadingIcons from 'react-loading-icons';

/* Youtube componentes */
import YT from '../../components/YT';
import jorgeThumbnail from '../../assets/guaviare/jorge/fondo-video-cel.jpg';
import carlosThumbnail from '../../assets/guaviare/carlos/fondo-video-cel.jpg';
import dayanaThumbnail1 from '../../assets/guaviare/carlos/fondo-video-cel.jpg';

import './GuaviareHome.css'

const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  const yCanalA = useSelector(state => state.managerReducer.yCanalA);
  const personaje = useSelector(state => state.managerReducer.personaje);
  const cancionActual = useSelector(state => state.managerReducer.cancionActual);
  const cancionAnterior = useSelector(state => state.managerReducer.cancionAnterior);
  const [esconderLoading, setEsconderLoading] = useState(false);
  const audioObj = crearAudioPlayer();

  const jorgeRelatoVideoRef = useRef(null);
  const carlosRelatoVideoRef = useRef(null);
  const williamRelatoVideoRef = useRef(null);

  /* Variables para Youtube */

  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [pintarYoutubeJorge, setPintarYoutubeJorge] = useState(false);
  const [carlosYoutubeRef, setCarlosYoutubeRef] = useState(null);
  const [pintarYoutubeCarlos, setPintarYoutubeCarlos] = useState(false);
  const [dayana1YoutubeRef, setDayana1YoutubeRef] = useState(null);
  const [pintarYoutubeDayana1, setPintarYoutubeDayana1] = useState(false);



  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);
    }, 3000);
    //Cuadrar el scroll cuando se viene de B
    // const timerScroll = setTimeout(() => {
    //   window.scrollTo({ top: yCanalA, behavior: 'smooth' });
    // }, 500);

    const timerYTJorge = setTimeout(() => {
      setPintarYoutubeJorge(true);
    }, 5000);

    const timerYTCarlos = setTimeout(() => {
      setPintarYoutubeCarlos(true);
    }, 8000);

    const timerYTDayana = setTimeout(() => {
      setPintarYoutubeDayana1(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerYTJorge);
      clearTimeout(timerYTCarlos);
      clearTimeout(timerYTDayana);
      //clearTimeout(timerScroll);
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
    {
      id: 'linea-dayana',
      titulo: 'Dayana Novoa',
      navegacion: 'guaviare-dayana-navegacion'
    },
    {
      id: 'linea-william',
      titulo: 'William Mora',
      navegacion: 'guaviare-william-navegacion'
    },
  ]

  const handleNavegacion = (id) => {
    //window.scrollTo({ top: 7000, behavior: 'auto' });
  }

  const refYoutubeJorge = (video) => {
    setJorgeYoutubeRef(video);
  }

  const refYoutubeCarlos = (video) => {
    setCarlosYoutubeRef(video);
  }

  const refYoutubeDayana1 = (video) => {
    setDayana1YoutubeRef(video);
  }

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrap',
        start: "top top",
        end: "+=12000",
        pin: true,
        scrub: 1,
        marker: true
      },
      defaults: { duration: 5 }
    })
      .to(".logo", { opacity: 0, y: -70, duration: 0.2 })
      .to(".scroll", { opacity: 0, y: 70, duration: 0.2 }, '<0.05')
      .to(".logo", { visibility: 'hidden', duration: 0 })
      .to(".scroll", { visibility: 'hidden', duration: 0 })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to('.box1', { autoAlpha: 1 })
      .to('.guaviare-contenido', { autoAlpha: 1 })
      .to('.guaviare-descripcion-p1', { autoAlpha: 1 })
      .to('.guaviare-descripcion-p1', { opacity: 0 })
      .to('.guaviare-descripcion-p2', { autoAlpha: 1 }, '<')
      .call(() => {
        videoGuaviareRef.current.play();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        videoGuaviareRef.current.pause();
        dispatch(establecerPersonaje('linea-jorge'));
        dispatch(escogerCancion(0))
      })
      .to('.box2', { autoAlpha: 1 })
      .to('.box2', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .to('.box3', { autoAlpha: 1 })
      .to('.box3', { opacity: 1, duration: 2 })
      .call(() => {
        jorgeRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        jorgeRelatoVideoRef.current?.play();
      })
      .to('.box4', { autoAlpha: 1 })
      .fromTo('.jorge-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .fromTo('.jorge-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-jorge'));
        jorgeRelatoVideoRef.current?.play();
      })
      .call(() => {
        jorgeRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null));
      })
      .to('.box5', { autoAlpha: 1 })
      .to('.box5', { opacity: 1, duration: 2 })
      .call(() => {
        carlosRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
        dispatch(establecerPersonaje('linea-carlos'));
      })
      .to('.box6', { autoAlpha: 1 })
      .to('.box6', { opacity: 1, duration: 2 })
      .to('.box7', { autoAlpha: 1 })
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .call(() => {
        carlosRelatoVideoRef.current.play();
      })
      .to('.box7', { opacity: 1, duration: 2 })
      .to('.box8', { autoAlpha: 1 })
      .call(() => {
        carlosRelatoVideoRef.current.play();
      })
      .fromTo('.carlos-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .fromTo('.carlos-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 2 })
      .call(() => {
        carlosRelatoVideoRef.current.play();
      })
      .call(() => {
        carlosRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box9', { autoAlpha: 1 })
      .call(() => {
        dispatch(establecerPersonaje('linea-carlos'));
      })
      .call(() => {
        dispatch(establecerPersonaje('linea-dayana'));
      })
      .to('.box9', { opacity: 1, duration: 2 })
      .to('.box10', { autoAlpha: 1 })
      .to('.box10', { opacity: 1, duration: 2 })
      .to('.box11', { autoAlpha: 1 })
      .to('.box11', { opacity: 1, duration: 2 })
      .to('.box12', { autoAlpha: 1 })
      .to('.box12', { opacity: 1, duration: 2 })
      .to('.box13', { autoAlpha: 1 })
      .call(() => {
        dispatch(establecerPersonaje('linea-dayana'));
        dispatch(escogerCancion(null))
      })
      .to('.box13', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-william'));
        dispatch(escogerCancion(4))
      })
      .to('.box14', { autoAlpha: 1 })
      .to('.box14', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .to('.box15', { autoAlpha: 1 })
      .to('.box15', { opacity: 1, duration: 2 })
      .call(() => {
        williamRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box16', { autoAlpha: 1 })
      .call(() => {
        williamRelatoVideoRef.current.play();
      })
      .to('.box16', { opacity: 1, duration: 2 })
      .fromTo('.william-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .fromTo('.william-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 2 })
      .call(() => {
        williamRelatoVideoRef.current.play();
      })
      .call(() => {
        williamRelatoVideoRef.current.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box17', { autoAlpha: 1 })
      .to('.box17', { opacity: 1, duration: 2 })
      .to('.box18', { autoAlpha: 1 })
      .to('.box18', { opacity: 1, duration: 2 })
      .to('.box19', { autoAlpha: 1 })
      .to('.box20', { autoAlpha: 1 })
      .to('.box21', { autoAlpha: 1 })
      .to('.box22', { autoAlpha: 1 })
      .to('.box23', { autoAlpha: 1 })
      .to('.box24', { autoAlpha: 1 })
      .to('.box25', { autoAlpha: 1 })
      .to('.box26', { autoAlpha: 1 })
      .to('.box27', { autoAlpha: 1 })
      .to('.box28', { autoAlpha: 1 })
      .to('.box29', { autoAlpha: 1 })
      .to('.box30', { autoAlpha: 1 })
      .to('.box31', { autoAlpha: 1 })
      .to('.box32', { autoAlpha: 1 })
      .to('.box33', { autoAlpha: 1 })
      .to('.box34', { autoAlpha: 1 })
      .to('.box35', { autoAlpha: 1 })
      .to('.box36', { autoAlpha: 1 })
      .to('.box37', { autoAlpha: 1 })
      .to('.box38', { autoAlpha: 1 })
      .to('.box39', { autoAlpha: 1 })

    return () => {
      tl.kill();
    }
  })



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

      {/* Videos de youtube */}


      <div className='yt-contenedor' id='youtube-jorge'>
        {pintarYoutubeJorge &&
          <YT
            refYoutubeFx={refYoutubeJorge}
            youtubeVideoId="-9AvYOpalrk"
            imgThumbnail={jorgeThumbnail}
            id='youtube-jorge'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-carlos'>
        {pintarYoutubeCarlos &&
          <YT
            refYoutubeFx={refYoutubeCarlos}
            youtubeVideoId="7FeSnVNixRg"
            imgThumbnail={carlosThumbnail}
            id='youtube-carlos'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-dayana1'>
        {pintarYoutubeDayana1 &&
          <YT
            refYoutubeFx={refYoutubeDayana1}
            youtubeVideoId="7FeSnVNixRg"
            imgThumbnail={dayanaThumbnail1}
            id='youtube-dayana1'
          />
        }
      </div>



      {/* Boxes */}

      <div className="wrap">
        <div className="box box1">
          <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
        </div>
        <div className="box box2">
          <div id='guaviare-jorge-navegacion'>
            <JorgeBio />
          </div>
        </div>
        <div className="box box3">
          {jorgeYoutubeRef != null && <JorgeYoutube youtubeRef={jorgeYoutubeRef} />}
          {jorgeYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box4">
          <JorgeRelatos jorgeRelatoVideoRef={jorgeRelatoVideoRef} />
        </div>
        <div className="box box5">
          <JorgeGaleria />
        </div>
        <div className="box box6">
          <CarlosBio />
        </div>
        <div className="box box7">
          {carlosYoutubeRef != null && <CarlosYoutube youtubeRef={carlosYoutubeRef} />}
          {carlosYoutubeRef == null && <div>Descargando...</div>}
          {/* <CarlosYoutube /> */}
        </div>
        <div className="box box8">
          <CarlosRelatos carlosRelatoVideoRef={carlosRelatoVideoRef} />
        </div>
        <div className="box box9">
          <CarlosGaleria />
        </div>
        <div className="box box10">
          <DayanaBio />
        </div>
        <div className="box box11">
          {dayana1YoutubeRef != null && <DayanaYoutube1 youtubeRef={dayana1YoutubeRef} />}
          {dayana1YoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box12">
          {/* <DayanaYoutube2 /> */}
        </div>
        <div className="box box13">
          <DayanaGaleria />
        </div>
        <div className="box box14">
          <div id='guaviare-william-navegacion'>
            <WilliamBio />
          </div>
        </div>
        <div className="box box15">
          <WilliamYoutube />
        </div>
        <div className="box box16">
          <WilliamRelatos williamRelatoVideoRef={williamRelatoVideoRef} />
        </div>
        <div className="box box17">
          <WilliamGaleria />
        </div>
        <div className="box box18">18</div>
        <div className="box box19">19</div>
        <div className="box box20">20</div>
        <div className="box box21">21</div>
        <div className="box box22">22</div>
        <div className="box box23">23</div>
        <div className="box box24">24</div>
        <div className="box box25">25</div>
        <div className="box box26">26</div>
        <div className="box box27">27</div>
        <div className="box box28">28</div>
        <div className="box box29">29</div>

        <div className="box box30">30</div>
        <div className="box box31">31</div>
        <div className="box box32">32</div>
        <div className="box box33">33</div>
        <div className="box box34">34</div>
        <div className="box box35">35</div>
        <div className="box box36">36</div>
        <div className="box box37">37</div>
        <div className="box box38">38</div>
        <div className="box box39">39</div>

      </div>
    </>
  )
}

export default GuaviareHome