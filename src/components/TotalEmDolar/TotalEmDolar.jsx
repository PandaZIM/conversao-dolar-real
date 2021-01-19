/* eslint-disable react/prop-types */
import React from 'react';


function TotalEmDolar(props) {
  return (
    <div>
        <span>Total em dólar sem imposto: {props.onSemImpostoDinheiro}</span>
        <span>Total em dólar com imposto: {props.onComImpostoDinheiro}</span>
    </div>
  );
}



export default TotalEmDolar;