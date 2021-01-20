/* eslint-disable react/prop-types */
import React from 'react';

function TotalEmDinheiro(props) {
  return (
        <div>
            <span>Total em real sem imposto: {props.onSemImpostoReal}</span>
            <span>Total em real com imposto: {props.onComImpostoReal}</span>
        </div>
  );
}

export default TotalEmDinheiro;