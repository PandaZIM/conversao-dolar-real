import React, { useState } from 'react';

import './App.css';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [valorDolar, setValorDolar] = useState();
  // eslint-disable-next-line no-unused-vars
  const [taxaEstado, setTaxaEstado] = useState();
  // eslint-disable-next-line no-unused-vars
  const [opcaoPagamento, setOpcaoPagamento] = useState();


  return (
    <div className="page-principal">
      <form className="page-principal-form" action="">
        <span>Digita o valor em Dólar: </span>
        <input className="page-principal-input-text"
          type="text"
          placeholder="US$"
          onChange={e => setValorDolar(e.target.value)}/>
        <span>Taxa do estado: </span>
        <input type="text"
          placeholder="%"
          onChange={e => setTaxaEstado(e.target.value)}/>
        <input className="page-principal-input-radio"
          type="radio" 
          value="Dinheiro"
          onChange={e => setOpcaoPagamento(e.target.value)}/> Dinheiro
        <input className="page-principal-input-radio" 
          type="radio"
          value="Cartao"
          onChange={e => setOpcaoPagamento(e.target.value)}/> Cartão
      </form>
    </div>
  );
}

export default App;
