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
  const [semImpostoDinheiro, setSemImpostoDinheiro] = useState();
  const [comImpostoDinheiro, setComImpostoDinheiro] = useState();
  const [semImpostoDinheiroReal, setSemImpostoDinheiroReal] = useState()
  const [comImpostoDinheiroReal, setComImpostoDinheiroReal] = useState()

  return (
    <div className="page-principal">
      <CotacaoDolar jao={cotacao => {
        setCotacaoDolar(cotacao)
      }}/>
        <InputsForm valor={cotacaoDolar?.USD.high}
        onSemImpostoDinheiro={(semImposto) => {
          setSemImpostoDinheiro(semImposto)
        }}
        onComImpostoDinheiro={(comImposto) =>{
          setComImpostoDinheiro(comImposto)
        }}
        onSemImpostoDinheiroReal={(semImpostoReal) => {
          setSemImpostoDinheiroReal(semImpostoReal)
        }}
        onComImpostoDinheiroReal={(comImpostoReal) => {
          setComImpostoDinheiroReal(comImpostoReal)
        }}
        taxa={(taxaIOF) => {
          setIOF(taxaIOF)
        }}/>

        <TaxaIOF taxa={IOF}/>
        <TotalEmDolar 
        onSemImpostoDinheiro={semImpostoDinheiro}
        onComImpostoDinheiro={comImpostoDinheiro}
        />
        <TotalEmDinheiro 
        onSemImpostoDinheiroReal={semImpostoDinheiroReal}
        onComImpostoDinheiroReal={comImpostoDinheiroReal}
        />
    </div>
  );
}

export default App;
