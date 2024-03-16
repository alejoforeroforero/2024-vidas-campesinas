import videoCaceria from '../../../assets/guaviaretemas/caceria/loop.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';
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
                    <div className='guaviare-caceria-titulo'>
                        <h1 className='guaviare-caceria-titulo-h1'>CACERÍA</h1>
                    </div>
                    <hr />
                </div>
               
            </div>
        </div>
    )
}

export default Caceria