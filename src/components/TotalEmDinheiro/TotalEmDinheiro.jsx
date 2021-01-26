import React from 'react';
import PropTypes from 'prop-types';

function TotalEmDinheiro(props) {
  return (
        <div>
            <span>Total em real sem imposto: <p>{props.onSemImpostoReal}</p></span>
            <span>Total em real com imposto: <p>{props.onComImpostoReal}</p></span>
        </div>
  );
}

TotalEmDinheiro.propTypes = {
  onSemImpostoReal: PropTypes.Number,
  onComImpostoReal: PropTypes.Number
}

export default TotalEmDinheiro;