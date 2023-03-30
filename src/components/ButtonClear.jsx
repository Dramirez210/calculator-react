import React from "react";
import '../css/ButtonClear.css';

const ButtonClear = (props) => (
  <div className="button-clear"
        onClick={props.handleClick}>
    {props.children /* Para contenido del componente*/} 
  </div>
);


export default ButtonClear;