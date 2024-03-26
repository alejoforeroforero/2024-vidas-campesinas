import CaceriaIntro from './Caceria/CaceriaIntro';
import GuayaberoIntro from './Guyabero/GuayaberoIntro';
import './GuaviareB.css';

const lineasB = [
    {
        id: 'linea-caceria',
        titulo: 'Caceria',
        navegacion: 'guaviare-caceria-navegacion'
    },
    {
        id: 'linea-guayabero',
        titulo: 'Guayabero',
        navegacion: 'guaviare-guyabero-navegacion'
    }
]

const GuaviareB = ({ hideCanalB, seccionBRef }) => {

    return (
        <>
            {!hideCanalB &&
                <div className='guaviare-lineas-b'>
                    {lineasB.map(linea => {
                        return <div
                            key={linea.id}
                            className='linea'
                        />
                    })}
                </div>
            }

            <div ref={seccionBRef} className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}>
                <div className='canal-b-interior'>
                    <div>
                        <CaceriaIntro />
                    </div>
                    <div>
                        <GuayaberoIntro />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuaviareB