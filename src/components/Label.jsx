import React from "react";
import '../css/Label.css';

function Label({ logo, text }){
  return(
    <div
      className='label-container'> 
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-container">
        { text } 
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Label;