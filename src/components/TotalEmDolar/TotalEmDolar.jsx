import React from 'react';
import PropTypes from 'prop-types';

function TotalEmDolar(props) {
  return (
    <div>
        <span>Total em dólar sem imposto: <p>{props.onSemImposto}</p></span>
        <span>Total em dólar com imposto: <p>{props.onComImposto}</p></span>
    </div>
  );
}

TotalEmDolar.propTypes = {
  onSemImposto: PropTypes.Number,
  onComImposto: PropTypes.Number
}

export default TotalEmDolar;