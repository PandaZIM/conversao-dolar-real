import React, { useState } from 'react';

import Group from '../../assets/Images/Group.svg'
import './styles.scss'

function ButtonConverter() {

  const [changeComponent, setChangeComponent] = useState(false)

  const handleButton = () => {
    setChangeComponent(true)
  }

  return (
      <div className='button-container'>
          <button 
          onClick={() => handleButton()}>
            <img src={Group} alt=""/>
            Converter
          </button>
          {changeComponent ? (<div>oi</div>) : (<div>io</div>)}
      </div>
  );
}

export default ButtonConverter;