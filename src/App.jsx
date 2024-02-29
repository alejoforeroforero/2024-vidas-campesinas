import React, { useState, Suspense, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loading from './components/Loading';

const Gv1 = React.lazy(() => import('./secciones/guaviare/Gv1'));
import Gv2 from "./secciones/guaviare/Gv2";
const Gv3 = React.lazy(() => import('./secciones/guaviare/Gv3'));
const Gv4 = React.lazy(() => import('./secciones/guaviare/Gv4'));
// import Gv3 from "./secciones/guaviare/Gv3";

//import GuaviareB from "./secciones/guaviare/GuaviareB";
const GuaviareB = React.lazy(() => import('./secciones/guaviare/GuaviareB'));

import logo from './assets/guaviare/gv1/gv1-logo.png';
import scroll from './assets/generales/scroll.png';
import ejeBImg from './assets/generales/ejeB.png';
import ejeAImg from './assets/generales/ejeA.png';

import './App.css'

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [mostrarMas, setMostarMas] = useState(false);
  const [hidennCanalB, setHideCanalB] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setMostarMas(true);
    }, 10000)
  }, [])



  const gv2Ref = useRef(null);
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  const handleEmpezar = () => {
    videoRef.current.play();
    gv2Ref.current.scrollIntoView();
    scrollRef.current.style.visibility = 'visible';
  }

  return (
    <>
      <Suspense>
        {hidennCanalB &&
          <div className='toogle-canal-b'>
            <img onClick={() => setHideCanalB(!hidennCanalB)} src={ejeBImg} alt="" />
          </div>
        }
        {!hidennCanalB &&
          <div className='toogle-canal-a'>
            <img onClick={() => setHideCanalB(!hidennCanalB)} src={ejeAImg} alt="" />
          </div>
        }

        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div ref={scrollRef} className='scroll'>
          <img src={scroll} alt="scroll-img" />
        </div>


        <Suspense fallback={<Loading />}><GuaviareB hideCanalB={hidennCanalB} /></Suspense>
        <Gv1 videoRef={videoRef} handleEmpezar={handleEmpezar} />
        <Gv2 gv2Ref={gv2Ref} videoRef={videoRef} />
        {mostrarMas &&
          <>
            <Suspense fallback={<Loading />}><Gv3 /></Suspense>
            <Suspense fallback={<Loading />}><Gv4 /></Suspense>
          </>
        }

      </Suspense>
    </>
  )
}

export default App
