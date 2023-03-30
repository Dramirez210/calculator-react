import React from "react";
import logo from '../img/Logouacm.png';
import '../css/Logo.css'


function Logo(){
  return(
    <div className='logo-container'>
        <img 
          className='logo-img'
          src={logo}
          alt='uacm logo' />
    </div>
  );
}

export default Logo;