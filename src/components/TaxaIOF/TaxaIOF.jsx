import React from 'react';
import PropTypes from 'prop-types';

function TaxaIOF(props) {
    
  return(
      <div>
          <span>Taxa do IOF: {props.taxa}</span>
      </div>
  );
}

TaxaIOF.propTypes = {
    taxa: PropTypes.number
}

export default TaxaIOF;