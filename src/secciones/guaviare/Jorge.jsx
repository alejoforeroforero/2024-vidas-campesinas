import { useState } from 'react';

import infoImg from '../../assets/generales/biografia.png';
import jorgeFoto from '../../assets/guaviare/jorge/jorge-cano.png';
import audioImg from '../../assets/generales/audio1.png';
import foto1 from '../../assets/guaviare/jorge/foto1.jpg';
import foto2 from '../../assets/guaviare/jorge/foto2.jpg';
import foto3 from '../../assets/guaviare/jorge/foto3.jpg';
import foto4 from '../../assets/guaviare/jorge/foto4.jpg';
import foto5 from '../../assets/guaviare/jorge/foto5.jpg';
import './Jorge.css';

import InfoPopup from '../../components/InfoPopup';
import YoutubePlayer from '../../components/YoutubePlayer';

const Jorge = () => {

  const [showingPopup, setShowingPopup] = useState(false);

  const biografia = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \
  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n \n \
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod \
  asdasd'

  const handleClosePopup = () => {
    setShowingPopup(false)
  }

  const audios = [
    {
      id: 'jorge-audio-1',
      titulo: 'Audio 1',
      src: ''
    },
    {
      id: 'jorge-audio-2',
      titulo: 'Audio 2',
      src: ''
    }
  ]

  return (
    <div className="seccion jorge" >
      <div className='jorge-entrada'>
        <div className='jorge-titulo'>
          <h1 className='jorge-titulo-h1'>Jorge <br />Luis Cano</h1>
        </div>
        <div className='jorge-contenido'>
          <img className='jorge-info' onClick={() => setShowingPopup(true)} src={infoImg} alt="info" />
          <img className='jorge-foto' src={jorgeFoto} alt="jorge-cano" />
          {showingPopup && <InfoPopup biografia={biografia} handleClosePopup={handleClosePopup} />}
        </div>
      </div>
      <div className='jorge-youtube'>
        <YoutubePlayer
          youtubeVideoId={'Ke_53rCjS_U'}
          loop={false}
        />
      </div>
      <div className='jorge-audio'>
        <div className='jorge-audio-frase'>
          <h2 className='jorge-audio-frase-h2'>"Eramos acerradores, <br />
            pero ahora conservamos"
          </h2>
        </div>
        <div className='jorge-audio-continer'>
          {audios.map((audio, index) => {
            return (
              <div key={audio.id}>
                <div className='jorge-audio-fila'>
                  <img src={audioImg} alt="audio-img" />
                  <p>{audio.titulo}</p>
                </div>
                {index < audios.length - 1 &&
                  <hr className='guaviare-descripcion-hr' />
                }
              </div>
            )
          })}
        </div>
      </div>
      <div className='jorge-galeria'>
        <div className='jorge-galeria-header'>
          <h2>Galería Fotográfica</h2>
          <h1>Jorge Luis Cano</h1>
        </div>
        <div className='jorge-galeria-fotos'>
          <img className='jorge-foto-1' src={foto1} alt="foto" />
          <img className='jorge-foto-2' src={foto2} alt="foto" />
          <img className='jorge-foto-3' src={foto3} alt="foto" />
          <img className='jorge-foto-4' src={foto4} alt="foto" />
          <img className='jorge-foto-5' src={foto5} alt="foto" />
        </div>
      </div>
    </div>
  )
}

export default Jorge