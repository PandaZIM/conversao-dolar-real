/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './App.css';
import CotacaoDolar from './components/cotacaoDolar/cotacaoDolar';
import InputsForm from './components/inputsForm/inputsForm';
//import api from './services/api';

function App() {

  //Manuseamento de estado das variaveis
/*   const [valorDolar, setValorDolar] = useState(0);
  const [taxaEstado, setTaxaEstado] = useState(0); */
  const [opcaoPagamento, setOpcaoPagamento] = useState();
  const [cotacaoDolar, setCotacaoDolar] = useState();
  const [IOF, setIOF] = useState();
  const [semImpostoDinheiro, setSemImpostoDinheiro] = useState();
  const [comImpostoDinheiro, setComImpostoDinheiro] = useState();
  

/*   //consumação da api
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
  },[]); */

/*   console.log(valorDolar) */
/*   console.log(taxaEstado)
  console.log(opcaoPagamento) */
  //verificação caso a api me retorne um valor nulo
/*   if(cotacaoDolar === undefined) {
    return <> </> 
  } */
  
  /*
  function tipoIOF() {
    const opcao = opcaoPagamento
    if(opcao == "Dinheiro") {
      const IOF = (cotacaoDolar.USD.high * 0.011)
      return IOF
    }
  } */

  
  //função que faz o calculo do total a ser pago sem imposto
  /*function operacaoPorcentagem(){
    const taxa = (valorDolar * (taxaEstado/100)) + valorDolar 

    const total = (parseInt(valorDolar) + parseInt(taxa))
    return total
  }*/

/*   const print = (cotacao) => {
    setCotacaoDolar(cotacao)
  } */


  return (
    <div className="page-principal">
      <CotacaoDolar jao={cotacao => {
        setCotacaoDolar(cotacao)
      }}/>
        <InputsForm valor={cotacaoDolar?.USD.high}
        funcoes={(semImposto, comImposto) => {
          setSemImpostoDinheiro(semImposto)
          setComImpostoDinheiro(comImposto)
        }}/>
        
      {/* <form className="page-principal-form" action="">
          <span>Digita o valor em Dólar: </span>
          <input className="page-principal-input-text"
            type="text"
            placeholder="US$"
            onChange={e => setValorDolar(parseInt(e.target.value))}/>
          <span>Taxa do estado: </span>
          <input type="text"
            placeholder="%"
            onChange={e => setTaxaEstado(parseInt(e.target.value))}/>
          <input className="page-principal-input-radio"
            type="radio" 
            value="Dinheiro"
            name="OpcaoPagamento"
            onChange={(e) => 
            {
              const operacaoSemImposto = parseInt((valorDolar * (taxaEstado/100))) + parseInt(valorDolar)
              const operacaoComImposto = parseInt(cotacaoDolar.USD.high) + parseInt((cotacaoDolar.USD.high * 0.011) + cotacaoDolar.USD.high)
              setOpcaoPagamento(e.target.value)
              setIOF(cotacaoDolar.USD.high * 0.011)
              setSemImpostoDinheiro(`$${operacaoSemImposto}`)
              setComImpostoDinheiro(`$${operacaoComImposto}`)
            }}/> Dinheiro
          <input className="page-principal-input-radio" 
            type="radio"
            value="Cartao"
            name="OpcaoPagamento"
            onChange={e => 
            {
                setOpcaoPagamento(e.target.value)
                setIOF(cotacaoDolar.USD.high * 0.064)
                setSemImpostoDinheiro('$' + (valorDolar * (taxaEstado/100)) + parseInt(valorDolar))
            }}/> Cartão
        </form>
 */}{/* 
        <div className="page-principal-dados">
          <span>IOF: <p>{IOF}</p></span>
          <span>Total em dólar sem imposto: <p>{semImpostoDinheiro}</p></span>
          <span>Total em dólar com imposto: <p>{comImpostoDinheiro}</p></span>
        </div> */}
    </div>
  );
}

export default App;
