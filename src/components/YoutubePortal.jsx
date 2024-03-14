import ReactDOM from "react-dom";

import './YoutubePortal.css';

const YoutubePortal = ({open, children, onClose}) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="youtube-portal">
                <button className="close-portal" onClick={onClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default YoutubePortal