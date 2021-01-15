import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
//import api from './services/api';

function App() {

  //Manuseamento de estado das variaveis
  const [valorDolar, setValorDolar] = useState(0);
  const [taxaEstado, setTaxaEstado] = useState(0);
  const [opcaoPagamento, setOpcaoPagamento] = useState();
  const [cotacaoDolar, setCotacaoDolar] = useState();
  const [IOF, setIOF] = useState();


  //consumação da api
  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all')
    .then(response => {
        const cotacao = response.data
        setCotacaoDolar(cotacao)
    })
    .catch(error => {
      //gestão de erros
      console.log(error)
    })
  },[]);

  console.log(valorDolar)
  console.log(taxaEstado)
  console.log(opcaoPagamento)
  //verificação caso a api me retorne um valor nulo
  if(cotacaoDolar === undefined) {
    return <> </> 
  }
  
  //função que faz o calculo do total a ser pago sem imposto
  function operacaoPorcentagem(){
    const operacao = valorDolar * (taxaEstado/100) 

    const total = (parseInt(valorDolar) + parseInt(operacao))
    return total
  }


  return (
    <div className="page-principal">
      <div className="page-principal-cotacoes">
        <span>Cotação do dia: <p>R${cotacaoDolar.USD.high}</p></span>
        </div>
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
          name="OpcaoPagamento"
          onChange={(e) => 
          {
            setOpcaoPagamento(e.target.value)
            setIOF(cotacaoDolar.USD.high * 0.011)
          }}/> Dinheiro
        <input className="page-principal-input-radio" 
          type="radio"
          value="Cartao"
          name="OpcaoPagamento"
          onChange={e => 
          {
              setOpcaoPagamento(e.target.value)
              setIOF(cotacaoDolar.USD.high * 0.064)
          }}/> Cartão
      </form>
      <div className="page-principal-dados">
        <span>IOF: <p>{IOF}</p></span>
        <span>Total em dólar sem imposto: <p>{operacaoPorcentagem() + '$'}</p></span>
      </div>
    </div>
  );
}

export default App;
