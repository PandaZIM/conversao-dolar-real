import React from 'react';

import Group from '../../assets/Images/Group.svg'
import './styles.scss'

function ButtonConverter() {
  return (
      <div className='button-container'>
          <button type='submit'>
            <img src={Group} alt=""/>
            Converter
          </button>
      </div>
  );
}

export default ButtonConverter;