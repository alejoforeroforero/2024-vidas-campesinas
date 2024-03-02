import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch } from 'react-redux';
import { cambiarDepartamento } from '../../redux/states/managerSlice';

import videoG from '../../assets/guaviare/gv2/guaviare3.mp4';

import './Gv2.css'


const Gv2 = ({ videoGuaviareRef }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cambiarDepartamento('guaviare'))
  }, [dispatch])

  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gv2",
          start: `top top`,
          end: "+=8200",
          invalidateOnRefresh: false,
          scrub: 1,
          pin: true,
          markers: true
        }
      })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".logo", { opacity: 0, y: -70, duration: 5 })
      .to(".scroll", { opacity: 0, y: 70, duration: 3 }, '<')
      // .to(".toogle-canal-b", { opacity: 1, duration: 4 })
      .to(".g2-textos", { opacity: 1, duration: 30 }, '<12')
      .to(".g2-textos-p1", { opacity: 1, y: 10, duration: 0 }, '>12')
      .to(".g2-textos-p1", { opacity: 1, duration: 40 })
      .to(".g2-textos-p1", { opacity: 1, duration: 30 })
      .to(".g2-textos-p1", { opacity: 0, duration: 30 })
      .to(".g2-textos-p2", { opacity: 1, y: 20, duration: 30 }, '>12')
      .to(".g2-textos-p2", { opacity: 1, duration: 120 })
      .to(".g2-textos-p2", { opacity: 1, duration: 30 }, '>30')
      .to(".g2-textos-p2", { opacity: 0, duration: 30 })
      .to(".g2-textos-p3", { opacity: 1, y: 10, duration: 30 }, '>12')
      .to(".g2-textos-p3", { opacity: 1, duration: 120 }, '>30')
      .to(".g2-textos-p3", { opacity: 0, duration: 30 })
      .call(() => {
        videoGuaviareRef.current.play();
      })
      .to(".g2-video", { opacity: 0.7, duration: 90 }, '>12')
      .call(() => {
        videoGuaviareRef.current.pause();
      })

    return () => {
      tl.kill();
    }
  }, [])

  return (
    <div id='gv2-id' className="seccion gv2" >
      <div className="g2-video">
        <video loop playsInline muted className="g2-video-video" ref={videoGuaviareRef} src={videoG}></video>
      </div>
      <div className="g2-textos">
        <p className="g2-textos-p1"> HLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.</p>
        <p className="g2-textos-p2"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. </p>
        <p className="g2-textos-p3"> Espero que muy bien compañeros</p>
      </div>
    </div>
  )
}

export default Gv2