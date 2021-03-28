import React from 'react';

import './style.scss'

import StoneLogo from '../../assets/Images/Main-Logo.svg'

function Header() {
  return (
      <div className="Container">
          <div className="Container-img">
            <img src={StoneLogo} alt="Logotipo Stone"/>
          </div>
          <div className="Container-content">
            <h1>dummy code | dummy code UTC</h1>
            <h2>Dados de câmbio disponibilizados pela Morningstar.</h2>
          </div>
      </div>
  );
}

export default Header;