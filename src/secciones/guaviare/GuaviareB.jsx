import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import CanalBPortal from '../../components/CanalBPortal';

import './GuaviareB.css';

const GuaviareB = ({ hideCanalB }) => {
    const [isOpen, setIsOpen] = useState(false);

    const canalBRef = useRef(null);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            canalBRef.current.style.visibility = 'hidden';
        }, 4000)

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (hideCanalB) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [hideCanalB])

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


    return (
        <div ref={canalBRef} className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
        </div>
    )

    // return (
    //     <>
    //         <div className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
    //             <section className='cazeria-contenedor'>
    //                 <div>
    //                     <CaceriaIntro />
    //                 </div>
    //                 <div>
    //                     <CaceriaAudio1 />
    //                 </div>
    //                 <div>
    //                     <CaceriaAudio2 />
    //                 </div>
    //             </section>
    //         </div>
    //     </>
    // )
}

export default GuaviareB