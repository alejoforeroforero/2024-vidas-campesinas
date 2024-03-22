import videoGuaviare from '../../assets/guaviare/home/guaviare.mp4';
import guaviareGrafica from '../../assets/guaviare/home/pictograma.png';
import guaviarePoster from '../../assets/guaviare/home/guaviare-poster.jpg';

import './GuaviareEntrada.css'

const GuaviareEntrada = ({ videoGuaviareRef }) => {

  return (
    <div className="seccion guaviare" >
      <div className="guaviare-video">
        <video
          ref={videoGuaviareRef}
          poster={guaviarePoster}
          loop
          playsInline
          muted
          className="guaviare-video-video"
          src={videoGuaviare}>
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
          <div className='guaviare-descripcion-p-contenedor'>
            <p className='guaviare-descripcion-p1'>
              Las vidas campesinas del Raudal han visto pasar múltiples bonanzas, como la cacería, la madera, la marihuana y la coca, que trajeron consigo dinámicas de violencia y depredación de la naturaleza
            </p>
            <p className='guaviare-descripcion-p2'>
              Hoy en día, la comunidad le apuesta a la protección del patrimonio arqueológico, a la conservación de la biodiversidad de la Amazonía y al turismo comunitario y sostenible convirtiéndose en los Guardianes del Yurupari.
            </p>
          </div>
          <div className='guaviare-descripcion-grafica'>
            <img src={guaviareGrafica} alt="guaviare" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuaviareEntrada