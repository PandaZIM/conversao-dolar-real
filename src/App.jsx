import React, {useState } from 'react';

import './App.css';
import CotacaoDolar from './components/cotacaoDolar/cotacaoDolar';
import InputsForm from './components/inputsForm/inputsForm';
import TaxaIOF from './components/TaxaIOF/TaxaIOF';
import TotalEmDinheiro from './components/TotalEmDinheiro/TotalEmDinheiro';
import TotalEmDolar from './components/TotalEmDolar/TotalEmDolar';


function App() {

  const [cotacaoDolar, setCotacaoDolar] = useState();
  const [IOF, setIOF] = useState();
  const [semImposto, setSemImposto] = useState();
  const [comImposto, setComImposto] = useState();
  const [semImpostoReal, setSemImpostoReal] = useState()
  const [comImpostoReal, setComImpostoReal] = useState()

  return (
    <div className="page-principal">
      <CotacaoDolar jao={cotacao => {
        setCotacaoDolar(cotacao)
      }}/>
        <InputsForm valor={cotacaoDolar?.USD.high}
        onSemImposto={(semImpostos) => {
          setSemImposto(semImpostos)
        }}
        onComImposto={(comImpostos) =>{
          setComImposto(comImpostos)
        }}
        onSemImpostoReal={(semImpostosReal) => {
          setSemImpostoReal(semImpostosReal)
        }}
        onComImpostoReal={(comImpostosReal) => {
          setComImpostoReal(comImpostosReal)
        }}
        onComImpostoCartao 
        taxa={(taxaIOF) => {
          setIOF(taxaIOF)
        }}/>

        <TaxaIOF taxa={IOF}/>
        <TotalEmDolar 
        onSemImposto={semImposto}
        onComImposto={comImposto}
        />
        <TotalEmDinheiro 
        onSemImpostoReal={semImpostoReal}
        onComImpostoReal={comImpostoReal}
        />
    </div>
  );
}

export default App;
