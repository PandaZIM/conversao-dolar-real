/* eslint-disable react/prop-types */
import React from 'react';


function TotalEmDolar(props) {
  return (
    <div>
        <span>Total em dólar sem imposto: <p>{props.onSemImposto}</p></span>
        <span>Total em dólar com imposto: <p>{props.onComImposto}</p></span>
    </div>
  );
}



export default TotalEmDolar;