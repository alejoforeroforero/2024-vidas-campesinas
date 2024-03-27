import { NavLink } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import cenafaAbajo from '../../assets/home/cenafa-abajo.png';

import './HomeV2.css';

const HomeV2 = () => {

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".homev2",
          start: `top top`,
          end: "bottom top",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false
        }
      })
      .fromTo(".homev2", { opacity: 0 }, { opacity: 1, duration: 20 })
      .fromTo(".homev2", { opacity: 1 }, { opacity: 1, duration: 20 })
      .to(".homev2", { opacity: 0, duration: 20 })

    return () => {
      tl.kill();
    }
  }, [])

  const menu = [
    {
      id: 'h-m1',
      titulo: 'GUAVIARE',
      color: '#d05137',
      ir: 'guaviare'
    },
    {
      id: 'h-m2',
      titulo: 'CAQUETÁ',
      color: '#d7de51',
      ir: 'caqueta'
    },
    {
      id: 'h-m3',
      titulo: 'CAUCA',
      color: '#00a89d',
      ir: 'cauca'
    }
  ]

  return (
    <div className='seccion homev2'>
      <div className="homev2-menu">
        {menu.map(item => {
          return (
            <div key={item.id}>
              {/* {(item.id == 'h-m3') &&
                <img src={cenafaAbajo} alt='home' />
              } */}
              
              <NavLink
                id={item.id}
                style={{ color: item.color }}                
                to={item.ir}
              >{item.titulo}
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeV2