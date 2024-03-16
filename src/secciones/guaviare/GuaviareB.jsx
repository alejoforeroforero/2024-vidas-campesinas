import './GuaviareB.css';

const GuaviareB = ({ hideCanalB, seccionBRef }) => {
    return (
        <>
            <div ref={seccionBRef} className={hideCanalB ? 'guaviare-canal-b canal-b-hide' : 'guaviare-canal-b canal-b-show'}></div>
        </>
    )
}

export default GuaviareB