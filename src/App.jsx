import React, { Suspense } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loading from './components/Loading';
import Gv1 from "./secciones/guaviare/Gv1";
const Gv2 = React.lazy(() => import('./secciones/guaviare/Gv2'));
const Gv3 = React.lazy(() => import('./secciones/guaviare/Gv3'));
// import Gv3 from "./secciones/guaviare/Gv3";
import GuaviareB from "./secciones/guaviare/GuaviareB";
//const GuaviareB = React.lazy(() => import('./secciones/guaviare/GuaviareB'));

import './App.css'



function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <GuaviareB /> 
      <Gv1 /> 
      <Suspense fallback={<Loading />}><Gv2 /></Suspense> 
      <Suspense fallback={<Loading />}><Gv3 /></Suspense>           
    </>
  )
}

export default App
