import React from "react";
import '../css/ButtonClear.css';

const ButtonClear = (props) => (
  <button className="button-clear"
        onClick={props.handleClick}>
    {props.children /* Para contenido del componente*/} 
  </button>
);


export default ButtonClear;