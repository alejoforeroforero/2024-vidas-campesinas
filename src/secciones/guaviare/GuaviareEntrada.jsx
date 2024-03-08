import videoGuaviare from '../../assets/guaviare/home/guaviare2.mp4';
import videoGuaviarePoster from '../../assets/guaviare/home/guaviare-poster.jpg';

import './GuaviareEntrada.css'

const GuaviareEntrada = ({ videoGuaviareRef }) => {

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
      <div className="guaviare-mask"></div>
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