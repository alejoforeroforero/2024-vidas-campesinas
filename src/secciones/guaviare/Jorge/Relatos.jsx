import relatosVideo from '../../../assets/guaviare/jorge/loop-relatos.mp4';
import videoGuaviarePoster from '../../../assets/guaviare/home/guaviare-poster.jpg';
import './Relatos.css'
import LoopVideo from '../../../components/LoopVideo';


const Relatos = ({ jorgeRelatoVideoRef }) => {

    return (
        <div className="seccion jorge-relatos" >
            <LoopVideo
                videoRef={jorgeRelatoVideoRef}
                tiempo='3000'
                video={relatosVideo}
                poster={videoGuaviarePoster}
            />
            <div className="relatos-mask"></div>
            <div className="jorge-relatos-contenido">
             
                <p>Hola</p>
                {/* <audio ref={jorgeAudio1} src=""></audio>
                <audio ref={jorgeAudio2} src=""></audio> */}
            </div>
        </div>
    )
}

export default Relatos