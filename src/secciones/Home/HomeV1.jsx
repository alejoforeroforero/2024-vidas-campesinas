import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import videoHome from '../../assets/home/guaviare3.mp4';
import homePoster from '../../assets/home/home-poster.jpg';

import './HomeV1.css'

const HomeV1 = ({videHomeRef}) => {

    useGSAP(() => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".home",
              start: `top top`,
              end: "+=4200",
              invalidateOnRefresh: false,
              scrub: 1,
              pin: true,
              markers: false
            }
          })
          .call(() => {
            videHomeRef.current.play();
          })
          .fromTo('.toogle-canal-b', {opacity:0, visibility:'hidden'}, {opacity:0, visibility:'hidden', duration:1})
          .to(".logo", { opacity: 0, y: -70, duration: 5 })
          .to(".scroll", { opacity: 0, y: 70, duration: 3 }, '<')
          .to(".home-textos", { opacity: 1, duration: 20 }, '<12')
          .to(".logo", { visibility:'hidden', duration: 1 })
          .to(".home-textos-p1", { opacity: 1, y: 10, duration: 0 }, '>12')
          .to(".scroll", { visibility:'hidden', duration: 1 })
          .to(".home-textos-p1", { opacity: 1, duration: 20 })
          .to(".home-textos-p1", { opacity: 1, duration: 10 })
          .to(".home-textos-p1", { opacity: 0, duration: 20 })
          .to(".home-textos-p2", { opacity: 1, y: 20, duration: 20 })
          .to(".home-textos-p2", { opacity: 1, duration: 20 })
          .to(".home-textos-p2", { opacity: 0, duration: 10 })
          .to(".home-textos-p3", { opacity: 1, y: -20, duration: 20 })
          .to(".home-textos-p3", { opacity: 1, duration: 20 })
          .to(".home-textos-p3", { opacity: 0, duration: 10 })
          .to(".home-textos-p4", { opacity: 1, y: 20, duration: 20 })
          .to(".home-textos-p4", { opacity: 1, duration: 20 })
          .to(".home-textos-p4", { opacity: 0, duration: 10 })
          .call(() => {
            videHomeRef.current.play();
          })
          .to(".home-video", { opacity: 0, duration: 10 })
          .call(() => {
            videHomeRef.current.pause();
          })
    
        return () => {
          tl.kill();
        }
      }, [])
    

  return (
    <div className='seccion home'>
      <div id='home-id' className="seccion home" >
        <div className="home-video">
          <video 
            ref={videHomeRef} 
            loop 
            playsInline 
            muted 
            className="home-video-video" 
            poster={homePoster}
            src={videoHome}>            
          </video>
        </div>
        <div className="home-textos">
          <p className="home-textos-p1"> En Colombia, los campesinos y las campesinas han venido reivindicando desde hace más de una década su reconocimiento como sujeto integral de derechos. El Paro Nacional Agrario de 2013, así como mesas de negociación derivadas con el Estado, pusieron sobre la palestra nacional que campesinas y campesinos no aparecían como tales en los documentos e instrumentos de política pública, como tampoco en las concepciones generales del Estado.</p>
          <p className="home-textos-p2"> La población campesina ha sufrido discriminaciones y exclusiones de larga data, y han sido estas comunidades las más afectadas por el conflicto armado. El 26.2% de la población colombiana se auto-reconoce como campesina.</p>
          <p className="home-textos-p3"> Finalmente, en 2023, Colombia firma la <i>Declaración de Derechos Campesinos y de Otras Personas que Trabajan en las Zonas Rurales de la ONU</i>, y reforma el artículo 64 de la Constitución Política de 1991, que reconoce al campesinado como sujeto de derechos de especial protección. Esto da inicio a una nueva etapa en la historia del campesinado.</p>
          <p className="home-textos-p4"> <i>Vidas campesinas</i> es un proyecto que busca reconocer y potenciar los procesos, las memorias y los aprendizajes de tres experiencias campesinas significativas, provenientes de tres departamentos: el Cauca, el Guaviare y el Caquetá.  </p>
        </div>
      </div>
    </div>
  )
}

export default HomeV1