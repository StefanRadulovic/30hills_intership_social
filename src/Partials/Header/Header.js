import React from 'react';

import './Header.css'

const Header=(props)=>{
  
    return (
        <div className='header'>
        <h1 className='header-text' onClick={props.clicked}>Social Network</h1>
        </div>
    )
}

export default Header;