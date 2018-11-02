import React from "react";
import './button.css';

const Button = (props) => {
    return(
        <button onClick={props.click} className={props.style + ' btn'}>Toggle</button>
    )
}

export default Button;