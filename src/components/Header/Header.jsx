import React from 'react';

import StoneLogo from '../../assets/Images/Main-Logo.svg'

function Header() {
  return (
      <div className="Container">
          <div className="Container-img">
            <img src={StoneLogo} alt="Logotipo Stone"/>
          </div>
          <div className="Container-content">

          </div>
      </div>
  );
}

export default Header;