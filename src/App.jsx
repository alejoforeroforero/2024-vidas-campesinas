
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Gv1 from "./secciones/guaviare/Gv1";
import Gv2 from "./secciones/guaviare/Gv2";
import Gv3 from "./secciones/guaviare/Gv3";

import './App.css'
import GuaviareB from "./secciones/guaviare/GuaviareB";


function App() {
  gsap.registerPlugin(ScrollTrigger);


  return (
    <>
      <GuaviareB />
      <Gv1 />
      <Gv2 />      
      <Gv3 />
    </>
  )
}

export default App
