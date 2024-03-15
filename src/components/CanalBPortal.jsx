import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import './CanalBPortal.css';

const CanalBPortal = ({open, children, onClose}) => {

    if(!open) return null;

    // useGSAP(() => {
    //     const tl = gsap
    //         .timeline({
    //             scrollTrigger: {
    //                 trigger: ".canal-b-prueba",
    //                 start: `top top`,
    //                 end: "+=800",
    //                 invalidateOnRefresh: false,
    //                 scrub: 1,
    //                 pin: true,
    //                 markers: true,
    //                 onEnter: () => {
                      
    //                 },
    //                 onUpdate: (self) => {
    //                     // console.log(self.progress.toFixed(3), window.scrollY);
    //                 }
    //             }
    //         })
    //         .fromTo(".canal-b-prueba-p1", { opacity: 1 }, { opacity: 0, duration: 10 })

    //     return () => {
    //         tl.kill();
    //     }
    // }, [])



    return ReactDOM.createPortal(
        <>
            <div className="canal-b-portal">
                <div className="close-portal" onClick={onClose}>X</div>
                <div className='canal-b-prueba'>
                    <p>Hola migues</p>
                    <p className='canal-b-prueba-p1'>Hola migues queridos</p>
                    <p>Hola migues</p>
                    <p>Hola migues</p>
                </div>
            </div>
        </>,
        document.getElementById('canal-b-portal')
    )
}

export default CanalBPortal