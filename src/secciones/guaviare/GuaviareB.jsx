import titi from '../../assets/guaviare/canal-b/caceria/titi.png';
import hojasIzq from '../../assets/guaviare/canal-b/caceria/hojas-izq.png';
import hojasDer from '../../assets/guaviare/canal-b/caceria/hojas-der.png';
import onca from '../../assets/guaviare/canal-b/caceria/onca.png';

import './GuaviareB.css';
import CaceriaIntro from './Caceria/CaceriaIntro';
import CaceriaAudio1 from './Caceria/CaceriaAudio1';
import CaceriaAudio2 from './Caceria/CaceriaAudio2';

const GuaviareB = ({ hideCanalB }) => {

    return (
        <>
            <div className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
                <section className='cazeria-contenedor'>
                    <div>
                        <CaceriaIntro />
                    </div>
                    <div>
                        <CaceriaAudio1 />
                    </div>
                    <div>
                        <CaceriaAudio2 />
                    </div>
                </section>
            </div>
        </>
    )
}

export default GuaviareB