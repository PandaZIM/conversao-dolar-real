/* eslint-disable react/prop-types */
import React from 'react';


function TotalEmDolar(props) {
  return (
    <div>
        <span>Total em dólar sem imposto: {props.onSemImposto}</span>
        <span>Total em dólar com imposto: {props.onComImposto}</span>
    </div>
  );
}



export default TotalEmDolar;