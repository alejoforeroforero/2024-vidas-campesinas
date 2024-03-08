import React, { useState, Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, NavLink } from 'react-router-dom';
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
import EnDesarrollo from './components/EnDesarrollo';
import NotFound from './components/NotFound';


function App() {
  gsap.registerPlugin(ScrollTrigger);

  const departamento = useSelector(state => state.managerReducer.departamento);

  const [yaEmpezo, setYaEmpezo] = useState(false);
  const [showingMenu, setShowingMenu] = useState(false);
  const [hidennCanalB, setHideCanalB] = useState(true);

  const scrollRef = useRef(null);
  const videHomeRef = useRef(null);
  const videoGuaviareRef = useRef(null);

   const handleEmpezar = () => {

    setYaEmpezo(true);

    if (departamento === '') {
      videHomeRef.current.play();
    } else if (departamento === 'guaviare') {
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
            {departamento === 'guaviare' &&
              <Suspense fallback={<Loading />}><GuaviareB hideCanalB={hidennCanalB} /></Suspense>
            }
          </section>
        </Suspense>
      }

      <div>
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
