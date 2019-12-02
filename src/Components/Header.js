import React from 'react';
import './Header.css';
import header from './images/rarepz-header.png'

const Header = ()=>{
    return(
        <div className="Header">
            <img src={header}/>
        </div>
    );
}

export default Header;