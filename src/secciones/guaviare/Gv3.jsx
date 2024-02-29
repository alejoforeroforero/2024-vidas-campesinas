import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mono from '../../assets/guaviare/gv3/mono.png';
import florDer from '../../assets/guaviare/gv3/flor-der.png';
import florIzq from '../../assets/guaviare/gv3/flor-izq.png';
import ramo from '../../assets/guaviare/gv3/ramo.png';

import './Gv3.css';

const Gv3 = () => {

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gv3",
          start: `top top`,
          end: "bottom",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false
        }
      })
      .fromTo(".gv3-mono", { opacity: 0, x: -30, y: -70 }, { opacity: 1, x: 0, y: 0, duration: 50, ease: 'back' })
      .fromTo(".gv3-flor-der", { opacity: 0, x: 60, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 10, ease: 'back' }, '<5')
      .fromTo(".gv3-flor-izq", { opacity: 0, x: -30, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 90, ease: 'rough' }, '<')
      .fromTo(".gv3-ramo", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '<10')
      .fromTo(".gv3-ramo", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '<10')
      .fromTo(".gv3-menu", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '+=10')

    return () => {
      tl.kill();
    }
  }, [])

  const menu = [
    {
      id: 'm1',
      titulo: 'GUAVIARE',
      ir: '#gv4'
    },
    {
      id: 'm2',
      titulo: 'CAQUETA',
      ir: '#gv4'
    },
    {
      id: 'm3',
      titulo: 'CAUCA',
      ir: '#gv4'
    }
  ]

  return (
    <div className='seccion gv3'>
      <img className='gv3-flor-der' src={florDer} alt="flor-der" />
      <img className='gv3-flor-izq' src={florIzq} alt="flor-izq" />
      <img className='gv3-ramo' src={ramo} alt="ramo" />
      <img className='gv3-mono' src={mono} alt="mono" />
      <div className="gv3-menu">
        {menu.map(item => {
          return <h1 key={item.id}>{item.titulo}</h1>
        })}
      </div>
    </div>
  )
}

export default Gv3