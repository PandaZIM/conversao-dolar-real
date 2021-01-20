/* eslint-disable react/prop-types */
import React from 'react';

function TotalEmDinheiro(props) {
  return (
        <div>
            <span>Total em real sem imposto: <p>{props.onSemImpostoReal}</p></span>
            <span>Total em real com imposto: <p>{props.onComImpostoReal}</p></span>
        </div>
  );
}

export default TotalEmDinheiro;