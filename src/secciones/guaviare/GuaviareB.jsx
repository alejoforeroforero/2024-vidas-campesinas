import Caceria from '../guaviaretemas/Caceria/Caceria';
import CaceriaIntro from './Caceria/CaceriaIntro';
import './GuaviareB.css';

const GuaviareB = ({ hideCanalB, seccionBRef }) => {
    return (
        <>
            <div ref={seccionBRef} className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
                <div className='canal-b-interior'>
                    <div>
                        <CaceriaIntro />
                    </div>
                    <div>
                        <CaceriaIntro />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuaviareB