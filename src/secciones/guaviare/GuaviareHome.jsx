import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  cambiarDepartamento,
  establecerPersonaje,
  escogerCancion,
} from '../../redux/states/managerSlice';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import { crearAudioPlayer } from './components/RelatosPlayer';

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

import MarisolBio from './Marisol/Bio';
import MarisolYoutube from './Marisol/Youtube';
import MarisolGaleria from './Marisol/Galeria';

import EliasBio from './Elias/Bio';
import EliasYoutube from './Elias/Youtube';
import EliasRelatos from './Elias/Relatos';

import LoadingIcons from 'react-loading-icons';

/* Youtube componentes */
import YT from '../../components/YT';
import jorgeThumbnail from '../../assets/guaviare/jorge/fondo-video-cel.jpg';
import carlosThumbnail from '../../assets/guaviare/carlos/fondo-video-cel.jpg';
import dayanaThumbnail1 from '../../assets/guaviare/dayana/fondo-video-cel.jpg';
import dayanaThumbnail2 from '../../assets/guaviare/dayana/fondo-video-cel2.jpg';
import williamThumbnail from '../../assets/guaviare/william/fondo-video-cel.jpg';
import marisolThumbnail from '../../assets/guaviare/marisol/fondo-video.jpg';
import eliasThumbnail from '../../assets/guaviare/elias/fondo-video.jpg';

import './GuaviareHome.css'

import {
  agregarS1,
  agregarS2,
  agregarS3,
  agregarS4,
  agregarS5,
  agregarS6,
} from './components/s1';

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
  {
    id: 'linea-marisol',
    titulo: 'Marisol Montero',
    navegacion: 'guaviare-marisol-navegacion'
  },
  {
    id: 'linea-elias',
    titulo: 'Elías Lozano',
    navegacion: 'guaviare-elias-navegacion'
  },
]

const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  const yCanalA = useSelector(state => state.managerReducer.yCanalA);
  const personaje = useSelector(state => state.managerReducer.personaje);
  const cancionActual = useSelector(state => state.managerReducer.cancionActual);
  const cancionAnterior = useSelector(state => state.managerReducer.cancionAnterior);
  const [esconderLoading, setEsconderLoading] = useState(false);
  const [audioObj, setSonidos] = useState([]);
  // const audioObj = crearAudioPlayer();

  const jorgeRelatoVideoRef = useRef(null);
  const carlosRelatoVideoRef = useRef(null);
  const williamRelatoVideoRef = useRef(null);
  const eliasRelatoVideoRef = useRef(null);

  /* Variables para Youtube */

  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [pintarYoutubeJorge, setPintarYoutubeJorge] = useState(false);
  const [carlosYoutubeRef, setCarlosYoutubeRef] = useState(null);
  const [pintarYoutubeCarlos, setPintarYoutubeCarlos] = useState(false);
  const [dayana1YoutubeRef, setDayana1YoutubeRef] = useState(null);
  const [pintarYoutubeDayana1, setPintarYoutubeDayana1] = useState(false);
  const [dayana2YoutubeRef, setDayana2YoutubeRef] = useState(null);
  const [pintarYoutubeDayana2, setPintarYoutubeDayana2] = useState(false);
  const [williamYoutubeRef, setWilliamYoutubeRef] = useState(null);
  const [pintarYoutubeWilliam, setPintarYoutubeWilliam] = useState(false);
  const [marisolYoutubeRef, setMarisolYoutubeRef] = useState(null);
  const [pintarYoutubeMarisol, setPintarYoutubeMarisol] = useState(false);
  const [eliasYoutubeRef, setEliasYoutubeRef] = useState(null);
  const [pintarYoutubeElias, setPintarYoutubeElias] = useState(false);

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    console.log(audioObj);
  }, [audioObj])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
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

  const refYoutubeDayana2 = (video) => {
    setDayana2YoutubeRef(video);
  }

  const refYoutubeWilliam = (video) => {
    setWilliamYoutubeRef(video);
  }

  const refYoutubeMarisol = (video) => {
    setMarisolYoutubeRef(video);
  }

  const refYoutubeElias = (video) => {
    setEliasYoutubeRef(video);
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
        const s1 = agregarS1();
        setSonidos(prevItems => {
          if (prevItems[0] == null) {
            return [...prevItems, s1]
          } else {
            return prevItems;
          }
        });
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
      .to('.box2-negro', { autoAlpha: 1 })
      .call(() => {
        videoGuaviareRef.current.pause();
        dispatch(establecerPersonaje('linea-jorge'));
        setPintarYoutubeJorge(true);
        const s2 = agregarS2();
        setSonidos(prevItems => {
          if (prevItems[1] == null) {
            return [...prevItems, s2]
          } else {
            return prevItems;
          }
        });
      })
      .to('.box2', { autoAlpha: 1 })
      .call(() => {
        dispatch(escogerCancion(0));
      })
      .to('.box2', { opacity: 1, duration: 2 })
      .fromTo('.jorge-info', { opacity: 0 }, { opacity: 1, duration: 2 })
      .to('.jorge-info', { opacity: 1, duration: 2 })
      .to('.jorge-info', { opacity: 0, duration: 2 })
      .to('.box2', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(escogerCancion(null))
        const s3 = agregarS3();
        setSonidos(prevItems => {
          if (prevItems[2] == null) {
            return [...prevItems, s3]
          } else {
            return prevItems;
          }
        });
      })
      .to('.box3-negro', { autoAlpha: 1, zIndex: 0 })
      .to('.box3', { autoAlpha: 1 })
      .to('.box3', { opacity: 1, duration: 2 })
      .to('.box3', { opacity: 1, duration: 2 })
      .to('.box4-negro', { autoAlpha: 1 })
      .call(() => {
        jorgeRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
        setPintarYoutubeCarlos(true);
      })
      .call(() => {
        jorgeRelatoVideoRef.current?.play();
      })
      .to('.box4', { autoAlpha: 1 })
      .fromTo('.jorge-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .to('.jorge-relatos-gsap', { opacity: 1, duration: 2 })
      .fromTo('.jorge-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 5 })
      .call(() => {
        dispatch(establecerPersonaje('linea-jorge'));
        jorgeRelatoVideoRef.current?.play();
      })
      .to('.box4', { autoAlpha: 1 })
      .call(() => {
        jorgeRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null));
      })
      .to('.box5-negro', { autoAlpha: 1 })
      .to('.box5', { autoAlpha: 1 })
      .to('.box5', { opacity: 1, duration: 2 })
      .to('.box5', { opacity: 1, duration: 2 })
      .call(() => {
        carlosRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
        dispatch(establecerPersonaje('linea-carlos'));
      })
      .to('.box6-negro', { autoAlpha: 1 })
      .call(() => {
        setPintarYoutubeDayana1(true);
        const s4 = agregarS4();
        setSonidos(prevItems => {
          if (prevItems[3] == null) {
            return [...prevItems, s4]
          } else {
            return prevItems;
          }
        });
      })
      .to('.box6', { autoAlpha: 1 })
      .to('.box6', { opacity: 1, duration: 2 })
      .fromTo('.carlos-info', { opacity: 0 }, { opacity: 1, duration: 2 })
      .to('.carlos-info', { opacity: 1, duration: 2 })
      .to('.carlos-info', { opacity: 0, duration: 2 })
      .to('.box6', { opacity: 1, duration: 2 })
      .to('.box7-negro', { autoAlpha: 1 })
      .to('.box7', { autoAlpha: 1 })
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .to('.box7', { opacity: 1, duration: 2 })
      .call(() => {
        carlosRelatoVideoRef.current?.pause();
      })
      .to('.box8-negro', { autoAlpha: 1 })
      .call(() => {
        carlosRelatoVideoRef.current?.play();
      })
      .to('.box8', { autoAlpha: 1 })
      .fromTo('.carlos-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .to('.carlos-relatos-gsap', { opacity: 1, duration: 2 })
      .fromTo('.carlos-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 2 })
      .call(() => {
        carlosRelatoVideoRef.current?.play();
      })
      .to('.box8', { autoAlpha: 1 })
      .call(() => {
        carlosRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box9-negro', { autoAlpha: 1 })
      .to('.box9', { autoAlpha: 1 })
      .to('.box9', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-carlos'));
      })
      .call(() => {
        dispatch(establecerPersonaje('linea-dayana'));
        setPintarYoutubeDayana2(true);
        const s5 = agregarS5();
        setSonidos(prevItems => {
          if (prevItems[4] == null) {
            return [...prevItems, s5]
          } else {
            return prevItems;
          }
        });
      })
      .to('.box9', { opacity: 1, duration: 2 })
      .to('.box10-negro', { autoAlpha: 1 })
      .to('.box10', { autoAlpha: 1 })
      .to('.box10', { opacity: 1, duration: 2 })
      .fromTo('.dayana-info', { opacity: 0 }, { opacity: 1, duration: 2 })
      .to('.dayana-info', { opacity: 1, duration: 2 })
      .to('.dayana-info', { opacity: 0, duration: 2 })
      .to('.box10', { opacity: 1, duration: 2 })
      .to('.box11-negro', { autoAlpha: 1 })
      .to('.box11', { autoAlpha: 1 })
      .to('.box11', { opacity: 1, duration: 2 })
      .to('.box12-negro', { autoAlpha: 1 })
      .to('.box12', { autoAlpha: 1 })
      .to('.box12', { opacity: 1, duration: 2 })
      .to('.box13-negro', { autoAlpha: 1 })
      .call(() => {
        setPintarYoutubeWilliam(true);
        const s6 = agregarS6();
        setSonidos(prevItems => {
          if (prevItems[5] == null) {
            return [...prevItems, s6]
          } else {
            return prevItems;
          }
        });
      })
      .to('.box13', { autoAlpha: 1 })
      .to('.box13', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-dayana'));
        dispatch(escogerCancion(null))
      })
      .to('.box13', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-william'));
        dispatch(escogerCancion(4))
      })
      .to('.box14-negro', { autoAlpha: 1 })
      .to('.box14', { autoAlpha: 1 })
      .to('.box14', { opacity: 1, duration: 2 })
      .fromTo('.william-info', { opacity: 0 }, { opacity: 1, duration: 2 })
      .to('.william-info', { opacity: 1, duration: 2 })
      .to('.william-info', { opacity: 0, duration: 2 })
      .call(() => {
        dispatch(escogerCancion(null))
      })
      .to('.box14', { opacity: 1, duration: 2 })
      .to('.box15-negro', { autoAlpha: 1 })
      .to('.box15', { autoAlpha: 1 })
      .to('.box15', { opacity: 1, duration: 2 })
      .call(() => {
        williamRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box16-negro', { autoAlpha: 1 })
      .to('.box16', { autoAlpha: 1 })
      .call(() => {
        williamRelatoVideoRef.current?.play();
      })
      .to('.box16', { opacity: 1, duration: 2 })
      .fromTo('.william-relatos-gsap', { opacity: 0 }, { opacity: 1, duration: 5 })
      .to('.william-relatos-gsap', { opacity: 1, duration: 2 })
      .fromTo('.william-relatos-gsap', { opacity: 1 }, { opacity: 0, duration: 2 })
      .call(() => {
        williamRelatoVideoRef.current?.play();
      })
      .to('.box16', { opacity: 1, duration: 2 })
      .call(() => {
        williamRelatoVideoRef.current?.pause();
        dispatch(escogerCancion(null))
      })
      .to('.box17-negro', { autoAlpha: 1 })
      .to('.box17', { autoAlpha: 1 })
      .to('.box17', { opacity: 1, duration: 2 })
      .call(() => {
        dispatch(establecerPersonaje('linea-william'));
      })
      .to('.box18-negro', { autoAlpha: 1 })
      .call(() => {
        dispatch(establecerPersonaje('linea-marisol'));
        setPintarYoutubeMarisol(true);
      })
      .to('.box18', { autoAlpha: 1 })
      .to('.box18', { opacity: 1, duration: 2 })
      .to('.box19-negro', { autoAlpha: 1 })
      .to('.box19', { autoAlpha: 1 })
      .to('.box20-negro', { autoAlpha: 1 })
      .to('.box20', { autoAlpha: 1 })
      .call(() => {
        dispatch(establecerPersonaje('linea-marisol'));
      })
      .to('.box21-negro', { autoAlpha: 1 })
      .call(() => {
        dispatch(establecerPersonaje('linea-elias'));
        setPintarYoutubeElias(true);
      })
      .to('.box21', { autoAlpha: 1 })
      .to('.box22-negro', { autoAlpha: 1 })
      .to('.box22', { autoAlpha: 1 })
      .call(()=>{
        eliasRelatoVideoRef.current?.pause();
      })
      .to('.box23-negro', { autoAlpha: 1 })
      .call(()=>{
        eliasRelatoVideoRef.current?.play();
      })
      .to('.box23', { autoAlpha: 1 })
      .to('.box23', { opacity: 1, duration: 2 })


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
            youtubeVideoId="yXqkGR1jqu8"
            imgThumbnail={dayanaThumbnail1}
            id='youtube-dayana1'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-dayana2'>
        {pintarYoutubeDayana2 &&
          <YT
            refYoutubeFx={refYoutubeDayana2}
            youtubeVideoId="1922XFwLkcw"
            imgThumbnail={dayanaThumbnail2}
            id='youtube-dayana2'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-william'>
        {pintarYoutubeWilliam &&
          <YT
            refYoutubeFx={refYoutubeWilliam}
            youtubeVideoId="Ke_53rCjS_U"
            imgThumbnail={williamThumbnail}
            id='youtube-william'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-marisol'>
        {pintarYoutubeMarisol &&
          <YT
            refYoutubeFx={refYoutubeMarisol}
            youtubeVideoId="j8keRsr6QCw"
            imgThumbnail={marisolThumbnail}
            id='youtube-marisol'
          />
        }
      </div>
      <div className='yt-contenedor' id='youtube-elias'>
        {pintarYoutubeElias &&
          <YT
            refYoutubeFx={refYoutubeElias}
            youtubeVideoId="xmIVSXpGNNI"
            imgThumbnail={eliasThumbnail}
            id='youtube-elias'
          />
        }
      </div>



      {/* Boxes */}

      <div className="wrap">
        <div className="box box1">
          <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
        </div>
        <div className="box box2-negro"></div>
        <div className="box box2">
          <div id='guaviare-jorge-navegacion'>
            <JorgeBio />
          </div>
        </div>
        <div className="box box3-negro"></div>
        <div className="box box3">
          {jorgeYoutubeRef != null && <JorgeYoutube youtubeRef={jorgeYoutubeRef} />}
          {jorgeYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box4-negro"></div>
        <div className="box box4">
          <JorgeRelatos jorgeRelatoVideoRef={jorgeRelatoVideoRef} />
        </div>
        <div className="box box5-negro"></div>
        <div className="box box5">
          <JorgeGaleria />
        </div>
        <div className="box box6-negro"></div>
        <div className="box box6">
          <CarlosBio />
        </div>
        <div className="box box7-negro"></div>
        <div className="box box7">
          {carlosYoutubeRef != null && <CarlosYoutube youtubeRef={carlosYoutubeRef} />}
          {carlosYoutubeRef == null && <div>Descargando...</div>}
          {/* <CarlosYoutube /> */}
        </div>
        <div className="box box8-negro"></div>
        <div className="box box8">
          <CarlosRelatos carlosRelatoVideoRef={carlosRelatoVideoRef} />
        </div>
        <div className="box box9-negro"></div>
        <div className="box box9">
          <CarlosGaleria />
        </div>
        <div className="box box10-negro"></div>
        <div className="box box10">
          <DayanaBio />
        </div>
        <div className="box box11-negro"></div>
        <div className="box box11">
          {dayana1YoutubeRef != null && <DayanaYoutube1 youtubeRef={dayana1YoutubeRef} />}
          {dayana1YoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box12-negro"></div>
        <div className="box box12">
          {dayana2YoutubeRef != null && <DayanaYoutube2 youtubeRef={dayana2YoutubeRef} />}
          {dayana2YoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box13-negro"></div>
        <div className="box box13">
          <DayanaGaleria />
        </div>
        <div className="box box14-negro"></div>
        <div className="box box14">
          <div id='guaviare-william-navegacion'>
            <WilliamBio />
          </div>
        </div>
        <div className="box box15-negro"></div>
        <div className="box box15">
          {williamYoutubeRef != null && <WilliamYoutube youtubeRef={williamYoutubeRef} />}
          {williamYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box16-negro"></div>
        <div className="box box16">
          <WilliamRelatos williamRelatoVideoRef={williamRelatoVideoRef} />
        </div>
        <div className="box box17-negro"></div>
        <div className="box box17">
          <WilliamGaleria />
        </div>
        <div className="box box18-negro"></div>
        <div className="box box18">
          <div id='guaviare-marisol-navegacion'>
            <MarisolBio />
          </div>
        </div>
        <div className="box box19-negro"></div>
        <div className="box box19">
          {marisolYoutubeRef != null && <MarisolYoutube youtubeRef={marisolYoutubeRef} />}
          {marisolYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box20-negro"></div>
        <div className="box box20">
          <MarisolGaleria />
        </div>
        <div className="box box21-negro"></div>
        <div className="box box21">
          <div id='guaviare-elias-navegacion'>
            <EliasBio />
          </div>
        </div>
        <div className="box box22-negro"></div>
        <div className="box box22">
          {eliasYoutubeRef != null && <EliasYoutube youtubeRef={eliasYoutubeRef} />}
          {eliasYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box23-negro"></div>
        <div className="box box23">
          <EliasRelatos eliasRelatoVideoRef={eliasRelatoVideoRef} />
        </div>
      </div>
    </>
  )
}

export default GuaviareHome