import ReactDOM from "react-dom";

import './CanalBPortal.css';

const CanalBPortal = ({open, children, onClose}) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="canal-b-portal">
                <div className="close-portal" onClick={onClose}>X</div>
                {children}
            </div>
        </>,
        document.getElementById('b-portal')
    )
}

export default CanalBPortal