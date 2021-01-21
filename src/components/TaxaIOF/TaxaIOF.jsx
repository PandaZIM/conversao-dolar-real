import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'

function TaxaIOF(props) {
    
  return(
      <div>
          <span>Taxa do IOF: <p>{props.taxa}</p></span>
      </div>
  );
}

TaxaIOF.propTypes = {
    taxa: PropTypes.number
}

export default TaxaIOF;