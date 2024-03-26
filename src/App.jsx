import React, { useState, Suspense, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, NavLink } from 'react-router-dom';
import { establecerYCanalA, escogerCancion, changeVideo } from './redux/states/managerSlice';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Portada from './components/Portada';

const Home = React.lazy(() => import('./secciones/Home/Home'));
const GuaviareHome = React.lazy(() => import('./secciones/guaviare/GuaviareHome'));
const GuaviareB = React.lazy(() => import('./secciones/guaviare/GuaviareB'));

import Loading from './components/Loading';

// import GuaviareB from './secciones/guaviare/GuaviareB';

import menu from './assets/generales/menu.png';
import logo from './assets/generales/logo.png';
import scroll from './assets/generales/scroll.png';
import ejeAImg from './assets/generales/ejeA.png'
import ejeBImg from './assets/generales/ejeB.png'

import './App.css'
import './GeneralB.css'
import EnDesarrollo from './components/EnDesarrollo';
import NotFound from './components/NotFound';


function App() {
  gsap.registerPlugin(ScrollTrigger);

  const departamento = useSelector(state => state.managerReducer.departamento);
  const yCanalA = useSelector(state => state.managerReducer.yCanalA);

  const [yaEmpezo, setYaEmpezo] = useState(false);
  const [showingMenu, setShowingMenu] = useState(false);
  const [hidennCanalB, setHideCanalB] = useState(true);
  const [mostrarLogo, setMostrarLogo] = useState(true);

  const scrollRef = useRef(null);
  const videHomeRef = useRef(null);
  const videoGuaviareRef = useRef(null);
  const seccionBRef = useRef(null);
  const dispatch = useDispatch();

  const handleEmpezar = () => {
    setYaEmpezo(true);
    if (departamento === '') {
      videHomeRef.current?.play();
    } else if (departamento === 'guaviare') {
      videoGuaviareRef.current?.play();
    }
    scrollRef.current.style.visibility = 'visible';
  }

  //Sólo para testing, quitar o comentar este useEffect
  // useEffect(() => {
  //   console.log(yCanalA);
  //   console.log(departamento);
  // }, [yCanalA])

  const handleCanalBOnClick = () => {
    setHideCanalB(!hidennCanalB);
    dispatch(establecerYCanalA(window.scrollY));
    dispatch(escogerCancion(null));
    dispatch(changeVideo(null));
  }

  const handleCanalAOnClick = () => {
    setHideCanalB(!hidennCanalB);
    dispatch(escogerCancion(null));
    dispatch(changeVideo(null));
    window.scrollTo({ top: yCanalA, behavior: 'smooth' });
  }

  return (
    <>
      <div className={(mostrarLogo) ? 'logo show-logo' : 'logo hide-logo'}>
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

      {yaEmpezo &&
        <Suspense>
          <div className='menu'>
            <img onClick={() => { setShowingMenu(!showingMenu) }} src={menu} alt="menu" />
          </div>
          <div className={showingMenu ? 'menu-contenido menu-show' : 'menu-contenido menu-hide'}>
            <NavLink onClick={() => { setShowingMenu(false) }} to='./guaviare'>Guaviare</NavLink>
            <NavLink onClick={() => { setShowingMenu(false) }} to='./caqueta'>Caqueta</NavLink>
            <NavLink onClick={() => { setShowingMenu(false) }} to='./cauca'>Cauca</NavLink>
          </div>
          <section className='seccion-b'>
            <GuaviareB hideCanalB={hidennCanalB} seccionBRef={seccionBRef}/>
          </section>
        </Suspense>
      }

      <div>
        {hidennCanalB &&
          <div className='toogle-canal-b'>
            <img onClick={() => handleCanalBOnClick()} src={ejeBImg} alt="" />
          </div>
        }

        {!hidennCanalB &&
          <div className='toogle-canal-a'>
            <img onClick={() => handleCanalAOnClick()} src={ejeAImg} alt="" />
          </div>
        }
      </div>

      <Suspense>
        <Routes>
          <Route path='/' element={<Home videHomeRef={videHomeRef} />} />
          <Route path='/guaviare' element={<GuaviareHome videoGuaviareRef={videoGuaviareRef} />} />
          <Route path='/caqueta' element={<EnDesarrollo />} />
          <Route path='/cauca' element={<EnDesarrollo />} />
          <Route path='*' element={<NotFound />} />
          <Route />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
