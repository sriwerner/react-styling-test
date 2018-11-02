import React from "react";
import './button.css';
import Radium from 'radium';

const Button = (props) => {
    return(
        <button onClick={props.click} className={props.style + ' btn'}>{props.text}</button>
    )
}

export default Radium(Button);