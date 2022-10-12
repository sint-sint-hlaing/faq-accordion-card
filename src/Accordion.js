import './Accordion.css'
import { useState } from 'react';
import arrowIcon from "./images/icon-arrow-down.svg"

const Accordion = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="accordion">
            <div className="question">
                <span className={open ? "active" : ""}>{data.question}</span>
                <span onClick={() => setOpen(!open)} >
                    <img src={arrowIcon} alt="arrowIcon" className={open ? "arrowIcon rotate" : "arrowIcon"} />
                </span>
            </div>
            <div className={open ? "answer show" : "answer"}>{data.answer}</div>
        </div>
    )
}

export default Accordion