import titi from '../../assets/guaviare/canal-b/caceria/titi.png';
import hojasIzq from '../../assets/guaviare/canal-b/caceria/hojas-izq.png';
import hojasDer from '../../assets/guaviare/canal-b/caceria/hojas-der.png';
import onca from '../../assets/guaviare/canal-b/caceria/onca.png';

import './GuaviareB.css';

const GuaviareB = ({ hideCanalB }) => {

    return (
        <>
            <div className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
                <section className='cazeria-contenedor'>
                    <div className='cazeria'>
                        <img className='cazeria-titi' src={titi} alt="titi" />
                        <img className='cazeria-hojas-izq' src={hojasIzq} alt="hojas-izq" />
                        <img className='cazeria-hojas-der' src={hojasDer} alt="hojas-der" />
                        <img className='cazeria-onca' src={onca} alt="hojas-onca" />
                        <h1 className='cazeria-titulo'>CACERIA</h1>
                        <h2 className='cazeria-frase'>“Frase sobre la cacería y época de comercio de pieles”</h2>
                    </div>
                    <div className='cazeria2'>
                        <div className='cazeria2-fondo'></div>
                        <img className='cazeria-titi' src={titi} alt="titi" />
                        <img className='cazeria-hojas-izq' src={hojasIzq} alt="hojas-izq" />
                        <img className='cazeria-hojas-der' src={hojasDer} alt="hojas-der" />
                        <img className='cazeria-onca' src={onca} alt="hojas-onca" />
                        <h1 className='cazeria-titulo'>CACERIA</h1>
                        <h2 className='cazeria-frase'>“Frase sobre la cacería y época de comercio de pieles”</h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default GuaviareB