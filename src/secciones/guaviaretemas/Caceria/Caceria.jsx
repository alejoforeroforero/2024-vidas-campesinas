import videoCaceria from '../../../assets/guaviaretemas/caceria/loop.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';
import danta from '../../../assets/guaviaretemas/caceria/danta.png';
import hojaDanta from '../../../assets/guaviaretemas/caceria/hoja2.png';
import hojaTop from '../../../assets/guaviaretemas/caceria/hoja1.png';
import './Caceria.css';

const Caceria = ({ videoCaceriaRef }) => {
    return (
        <div className="seccion guaviare-temas" >
            <div className="guaviare-caceria-video">
                <video
                    ref={videoCaceriaRef}
                    loop
                    playsInline
                    muted
                    className="guaviare-video-video"
                    src={videoCaceria}>
                    poster={videoGuaviarePoster}
                </video>
            </div>
            <div className="guaviare-caceria-mask"></div>
            <div className="guaviare-caceria-contenido">
                <div className='guaviare-caceria-entrada'>
                    <div className='guaviare-caceria-top'>
                        <img src={hojaTop} alt="hoja-top" />
                    </div>
                    <div className='guaviare-caceria-titulo'>
                        <h1 className='guaviare-caceria-titulo-h1'>CACERÍA</h1>
                        <hr />
                    </div>
                    <div className='guaviare-caceria-danta'>
                        <img className='danta' src={danta} alt="danta" />
                        <img className='hoja' src={hojaDanta} alt="hoja-danta" />
                    </div>                    
                </div>               
            </div>
        </div>
    )
}

export default Caceria