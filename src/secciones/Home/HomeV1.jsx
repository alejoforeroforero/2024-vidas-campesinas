import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import videoHome from '../../assets/home/guaviare3.mp4';

import './HomeV1.css'

const HomeV1 = ({videHomeRef}) => {

    useGSAP(() => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".home",
              start: `top top`,
              end: "+=8200",
              invalidateOnRefresh: false,
              scrub: 1,
              pin: true,
              markers: false
            }
          })
          .to(".toogle-canal-b", {opacity:0, duration:0.2})
          .call(() => {
            videHomeRef.current.play();
          })
          .to(".logo", { opacity: 0, y: -70, duration: 5 })
          .to(".scroll", { opacity: 0, y: 70, duration: 3 }, '<')
          .to(".home-textos", { opacity: 1, duration: 30 }, '<12')
          .to(".home-textos-p1", { opacity: 1, y: 10, duration: 0 }, '>12')
          .to(".home-textos-p1", { opacity: 1, duration: 40 })
          .to(".home-textos-p1", { opacity: 1, duration: 30 })
          .to(".home-textos-p1", { opacity: 0, duration: 30 })
          .to(".home-textos-p2", { opacity: 1, y: 20, duration: 30 }, '>12')
          .to(".home-textos-p2", { opacity: 1, duration: 120 })
          .to(".home-textos-p2", { opacity: 1, duration: 30 }, '>30')
          .to(".home-textos-p2", { opacity: 0, duration: 30 })
          .to(".home-textos-p3", { opacity: 1, y: 10, duration: 30 }, '>12')
          .to(".home-textos-p3", { opacity: 1, duration: 120 }, '>30')
          .to(".home-textos-p3", { opacity: 0, duration: 30 })
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
          <video ref={videHomeRef} loop playsInline muted className="home-video-video" src={videoHome}></video>
        </div>
        <div className="home-textos">
          <p className="home-textos-p1"> HLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
            facilisi.</p>
          <p className="home-textos-p2"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. </p>
          <p className="home-textos-p3"> Espero que muy bien compañeros</p>
        </div>
      </div>
    </div>
  )
}

export default HomeV1