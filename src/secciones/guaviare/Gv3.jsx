
import mono from '../../assets/guaviare/gv3/mono.png';

import './Gv3.css';

const Gv3 = () => {

  // useEffect(() => {
  //   const pin = gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".gv3",
  //         start: `top top`,
  //         end: "bottom",
  //         invalidateOnRefresh: false,
  //         scrub: true,
  //         pin: true,
  //         markers: true
  //       }
  //     })
  //     .to(".gv3-mono", { opacity: 1, duration: 4 }, 4)
  //   return () => {
  //     pin.kill();
  //   };
  // }, [])

  const menu = [
    {
      id:'m1',
      titulo:'GUAVIARE',
      ir:'#gv4'
    },
    {
      id:'m2',
      titulo:'CAQUETA',
      ir:'#gv4'
    },
    {
      id:'m3',
      titulo:'CAUCA',
      ir:'#gv4'
    }
  ]

  return (
    <div className='seccion gv3'>
      <img className='gv3-mono' src={mono} alt="mono" />
      {menu.map(item=>{
        return <h1 key={item.id}>{item.titulo}</h1>
      })}     
    </div>
  )
}

export default Gv3