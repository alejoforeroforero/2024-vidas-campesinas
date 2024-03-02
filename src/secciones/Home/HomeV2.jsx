import { NavLink } from 'react-router-dom' 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import mono from '../../assets/home/homev2/mono.png';
import florDer from '../../assets/home/homev2/flor-der.png';
import florIzq from '../../assets/home/homev2/flor-izq.png';
import ramo from '../../assets/home/homev2/ramo.png';

import './HomeV2.css';

const HomeV2 = () => {

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".homev2",
          start: `top top`,
          end: "+=4200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false
        }
      })
      .fromTo(".homev2", { opacity: 0 }, { opacity: 1, duration: 20 })
      .fromTo(".homev2-mono", { opacity: 0, x: -30, y: -70 }, { opacity: 1, x: 0, y: 0, duration: 50, ease: 'back' })
      .fromTo(".homev2-flor-der", { opacity: 0, x: 60, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 10, ease: 'back' }, '<5')
      .fromTo(".homev2-flor-izq", { opacity: 0, x: -30, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 90, ease: 'rough' }, '<')
      .fromTo(".homev2-ramo", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '<10')
      .fromTo(".homev2-ramo", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '<10')
      .fromTo(".homev2-menu", { opacity: 0 }, { opacity: 1, duration: 70, ease: 'rough' }, '+=10')

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
    <div className='seccion homev2'>
      <img className='homev2-flor-der' src={florDer} alt="flor-der" />
      <img className='homev2-flor-izq' src={florIzq} alt="flor-izq" />
      <img className='homev2-ramo' src={ramo} alt="ramo" />
      <img className='homev2-mono' src={mono} alt="mono" />
      <div className="homev2-menu">
        {menu.map(item => {
          return <h1 key={item.id}>{item.titulo}</h1>
        })}
      </div>
      <NavLink to='/guaviare'>Guaviare</NavLink>
    </div>
  )
}

export default HomeV2