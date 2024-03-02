import React, { useState, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Portada from './components/Portada';
const Home = React.lazy(() => import('./secciones/Home/Home'));
const GuaviareHome = React.lazy(() => import('./secciones/guaviare/GuaviareHome'));

import logo from './assets/generales/logo.png';
import scroll from './assets/generales/scroll.png';

import './App.css'

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const departamento = useSelector(state => state.managerReducer.departamento);

  const [yaEmpezo, setYaEmpezo] = useState(false);
  const scrollRef = useRef(null);
  const videHomeRef = useRef(null);
  const videoGuaviareRef = useRef(null);

  const handleEmpezar = () => {
    setYaEmpezo(true);
    if(departamento === 'home'){
      videHomeRef.current.play();
    }else if(departamento === 'guaviare'){
      videoGuaviareRef.current.play();
    }
    scrollRef.current.style.visibility = 'visible';
  }

  return (
    <>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>

      <div ref={scrollRef} className='scroll'>
        <img src={scroll} alt="scroll-img" />
      </div>

      {!yaEmpezo &&
        <section className='seccion-general'>
          <Portada handleEmpezar={handleEmpezar} />
        </section>
      }
      <Suspense>
        <Routes>
          <Route path='/' element={<Home videHomeRef={videHomeRef} />} />
          <Route path='/guaviare' element={<GuaviareHome videoGuaviareRef={videoGuaviareRef} />} />
          <Route path='*' element={<h1>No se encontró nada</h1>} />
          <Route />
        </Routes>
      </Suspense>



      {/* <Suspense>
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



        <section className="seccion-general">
          <Suspense fallback={<Loading />}><GuaviareB hideCanalB={hidennCanalB} /></Suspense>
        </section> 
       
        <section className='seccion-general'>
          <Gv1 videoRef={videoRef} handleEmpezar={handleEmpezar} />
        </section>

        <section className="seccion-general">
          <Gv2 gv2Ref={gv2Ref} videoRef={videoRef} />
        </section>

        {mostrarMas &&
          <>
            <section className="seccion-general">
              <Suspense fallback={<Loading />}><Gv3 /></Suspense>
            </section>
            <section className="seccion-general">
              <Suspense fallback={<Loading />}><Gv4 /></Suspense>
            </section>
          </>
        } 
      </Suspense> */}

    </>
  )
}

export default App
