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

import LoadingIcons from 'react-loading-icons';

/* Youtube componentes */
import YT from '../../components/YT';
import jorgeThumbnail from '../../assets/guaviare/jorge/fondo-video-cel.jpg';
import carlosThumbnail from '../../assets/guaviare/carlos/fondo-video-cel.jpg';
import dayanaThumbnail1 from '../../assets/guaviare/dayana/fondo-video-cel.jpg';
import dayanaThumbnail2 from '../../assets/guaviare/dayana/fondo-video-cel2.jpg';
import williamThumbnail from '../../assets/guaviare/william/fondo-video-cel.jpg';

/* Importación de audios */
import {
  agregarS1,
  agregarS2,
  agregarS3,
  agregarS4,
  agregarS5,
  agregarS6,
} from './components/s1';

import './GuaviareHome.css'

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


const GuaviareHome = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  const [pintarBioJorge, setPintarBioJorge] = useState(false);



  const yCanalA = useSelector(state => state.managerReducer.yCanalA);
  const personaje = useSelector(state => state.managerReducer.personaje);
  const cancionActual = useSelector(state => state.managerReducer.cancionActual);
  const cancionAnterior = useSelector(state => state.managerReducer.cancionAnterior);
  const [esconderLoading, setEsconderLoading] = useState(true);
  const [audioObj, setSonidos] = useState([]);
  // const audioObj = crearAudioPlayer();

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
  const [dayana2YoutubeRef, setDayana2YoutubeRef] = useState(null);
  const [pintarYoutubeDayana2, setPintarYoutubeDayana2] = useState(false);
  const [williamYoutubeRef, setWilliamYoutubeRef] = useState(null);
  const [pintarYoutubeWilliam, setPintarYoutubeWilliam] = useState(false);

  useLayoutEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      setEsconderLoading(true);
    }, 3000);

    return () => clearTimeout(timer);
  })

  // useEffect(() => {
  //   console.log(audioObj);
  // }, [audioObj])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setEsconderLoading(true);

  //     const s1 = agregarS1();
  //     setSonidos(prevItems => [...prevItems, s1]);
  //   }, 3000);
  //   //Cuadrar el scroll cuando se viene de B
  //   // const timerScroll = setTimeout(() => {
  //   //   window.scrollTo({ top: yCanalA, behavior: 'smooth' });
  //   // }, 500);

  //   const timerYTJorge = setTimeout(() => {
  //     setPintarYoutubeJorge(true);
  //     const s2 = agregarS2();
  //     setSonidos(prevItems => [...prevItems, s2]);
  //   }, 10000);

  //   const timerYTCarlos = setTimeout(() => {
  //     setPintarYoutubeCarlos(true);
  //     const s3 = agregarS3();
  //     setSonidos(prevItems => [...prevItems, s3]);
  //   }, 16000);

  //   const timerYTDayana = setTimeout(() => {
  //     setPintarYoutubeDayana1(true);
  //     const s4 = agregarS4();
  //     setSonidos(prevItems => [...prevItems, s4]);
  //   }, 22000);

  //   const timerYTDayana2 = setTimeout(() => {
  //     setPintarYoutubeDayana2(true);
  //     const s5 = agregarS5();
  //     setSonidos(prevItems => [...prevItems, s5]);
  //   }, 28000);

  //   const timerYTWilliam = setTimeout(() => {
  //     setPintarYoutubeWilliam(true);
  //     const s6 = agregarS6();
  //     setSonidos(prevItems => [...prevItems, s6]);
  //   }, 28000);

  //   return () => {
  //     clearTimeout(timer);
  //     clearTimeout(timerYTJorge);
  //     clearTimeout(timerYTCarlos);
  //     clearTimeout(timerYTDayana);
  //     clearTimeout(timerYTDayana2);
  //     clearTimeout(timerYTWilliam);
  //     //clearTimeout(timerScroll);
  //   }
  // }, [])


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


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.box1',
        start: "top top",
        end: "bottom",
        pin: true,
        scrub: 0,
        onEnter:()=>{
          console.log('entro');
        }
      },
      defaults: { duration: 1 }
    })
      .to(".logo", { opacity: 0, y: -70, duration: 0.2 })
      .to(".scroll", { opacity: 0, y: 70, duration: 0.2 }, '<0.05')
      .to(".logo", { visibility: 'hidden', duration: 0 })
      .to(".scroll", { visibility: 'hidden', duration: 0 })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to('.guaviare-contenido', { autoAlpha: 1 })
      .to('.guaviare-descripcion-p1', { autoAlpha: 1 })
      .call(()=>{
        (!pintarBioJorge) && setPintarBioJorge(true)
      })
      .to('.guaviare-descripcion-p1', { opacity: 0 })
      .to('.guaviare-descripcion-p2', { autoAlpha: 1 }, '<')
      .call(() => {
        videoGuaviareRef.current.play();
        dispatch(escogerCancion(null))
      })
      .call(() => {
        videoGuaviareRef.current.pause();
        dispatch(establecerPersonaje('linea-jorge'));
      })
      .to('.guaviare-descripcion-p2', { opacity: 0  })
      .to('box1', {zIndex:1})
      .fromTo('.box1', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}, {clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', duration:8}, '+10')
      

      // .to('.box1', {opacity:0})

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.box2',
          start: "top top",
          onEnter:()=>{
            console.log('descargar 3');
          }
        },
      })

    return () => {
      tl.kill();
      tl2.kill();
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

      {/* Boxes */}

      <div className="wrap">
        <div className="box box1">
          <div className='bg'>
            <GuaviareEntrada videoGuaviareRef={videoGuaviareRef} />
          </div>
        </div>
        <div className="box box2">
          <div className='bg' id='guaviare-jorge-navegacion'> 
            {pintarBioJorge ? <JorgeBio /> : <div>Descargando</div>}            
          </div>
        </div>
  

        {/* <div className="box box3">
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
          {dayana2YoutubeRef != null && <DayanaYoutube2 youtubeRef={dayana2YoutubeRef} />}
          {dayana2YoutubeRef == null && <div>Descargando...</div>}
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
          {williamYoutubeRef != null && <WilliamYoutube youtubeRef={williamYoutubeRef} />}
          {williamYoutubeRef == null && <div>Descargando...</div>}
        </div>
        <div className="box box16">
          <WilliamRelatos williamRelatoVideoRef={williamRelatoVideoRef} />
        </div>
        <div className="box box17">
          <WilliamGaleria />
        </div> */}
        {/* <div className="box box18">18</div>
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
        <div className="box box39">39</div> */}

      </div>
    </>
  )
}

export default GuaviareHome