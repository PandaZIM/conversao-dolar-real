import React, {useState } from 'react';

import '../src/assets/styles/Globalstyles.scss'

import CotacaoDolar from './components/cotacaoDolar/cotacaoDolar';
import Header from './components/Header/Header';
import InputsForm from './components/inputsForm/inputsForm';
import TaxaIOF from './components/TaxaIOF/TaxaIOF';
import ButtonConverter  from './components/ButtonConverter/ButtonConverter'
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
      <Header/>
      <CotacaoDolar onCotacao={cotacao => {
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
        taxa={(taxaIOF) => {
          setIOF(taxaIOF)
        }}/>

        <TaxaIOF taxa={IOF}/>
        <ButtonConverter/>
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
