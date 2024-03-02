import './GuaviareHome.css'

import videoGuaviare from '../../assets/home/guaviare3.mp4'

const GuaviareHome = ({videoGuaviareRef}) => {

  console.log('llego');

  return (
    <div className="seccion guaviare" >
      <div className="guaviare-video">
      <video ref={videoGuaviareRef} loop playsInline muted className="guaviare-video-video" src={videoGuaviare}></video>
      </div>
    </div>
  )
}

export default GuaviareHome