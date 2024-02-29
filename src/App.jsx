import React, { Suspense, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Loading from './components/Loading';
// import Gv1 from "./secciones/guaviare/Gv1";
const Gv1 = React.lazy(() => import('./secciones/guaviare/Gv1'));
const Gv2 = React.lazy(() => import('./secciones/guaviare/Gv2'));
const Gv3 = React.lazy(() => import('./secciones/guaviare/Gv3'));
// import Gv3 from "./secciones/guaviare/Gv3";
//import GuaviareB from "./secciones/guaviare/GuaviareB";
const GuaviareB = React.lazy(() => import('./secciones/guaviare/GuaviareB'));

import './App.css'



function App() {
  gsap.registerPlugin(ScrollTrigger);

  const gv2Ref = useRef(null);

  return (
    <>
      <Suspense>
        <GuaviareB />
        <Gv1 gv2Ref={gv2Ref} />
        <Suspense fallback={<Loading />}><Gv2 gv2Ref={gv2Ref} /></Suspense>
        <Suspense fallback={<Loading />}><Gv3 /></Suspense>
      </Suspense>
    </>
  )
}

export default App
