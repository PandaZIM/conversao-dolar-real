/* eslint-disable react/prop-types */
import React from 'react';

function TotalEmDinheiro(props) {
  return (
        <div>
            <span>Total sem imposto em real: {props.onSemImpostoDinheiroReal}</span>
            <span>Total com imposto em real: {props.onComImpostoDinheiroReal}</span>
        </div>
  );
}

export default TotalEmDinheiro;