import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import './GuaviareEntrada.css'
import videoGuaviare from '../../assets/guaviare/home/guaviare2.mp4';
import videoGuaviarePoster from '../../assets/guaviare/home/guaviare-poster.jpg';

const GuaviareEntrada = ({ videoGuaviareRef }) => {

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".guaviare",
          start: `top top`,
          end: "+=8200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: false
        }
      })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".logo", { opacity: 0, y: -70, duration: 10 })
      .to(".scroll", { opacity: 0, y: 70, duration: 15 }, '<1')
      .to(".guaviare-titulo", { opacity: 1, duration: 30 })
      .fromTo(".guaviare-titulo-h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 20, ease: 'back' })
      .fromTo(".guaviare-descripcion-h2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 20, ease: 'rough' })
      .fromTo(".guaviare-descripcion-hr", { opacity: 0, width: '1vw' }, { opacity: 1, width: '55vw', duration: 20, ease: 'rough' }, '<1')
      .fromTo(".guaviare-descripcion-p", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 20, ease: 'rough' }, '<10')
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".guaviare", { opacity: 0, duration: 10 })
      .call(() => {
        videoGuaviareRef.current.pause();
      })

    return () => {
      tl.kill();
    }
  }, [])

  return (
    <div className="seccion guaviare" >
      <div className="guaviare-video">
        <video
          ref={videoGuaviareRef}
          loop
          playsInline
          muted
          className="guaviare-video-video"
          src={videoGuaviare}>
          poster={videoGuaviarePoster}
        </video>
      </div>
      <div className="guaviare-contenido">
        <div className='guaviare-titulo'>
          <h1 className='guaviare-titulo-h1'>GUAVIARE</h1>
        </div>
        <div className='guaviare-descripcion'>
          <h2 className='guaviare-descripcion-h2'>RADUAL <br />
            DEL GUAYABERO
          </h2>
          <hr className='guaviare-descripcion-hr' />
          <p className='guaviare-descripcion-p'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
      </div>
    </div>
  )
}

export default GuaviareEntrada