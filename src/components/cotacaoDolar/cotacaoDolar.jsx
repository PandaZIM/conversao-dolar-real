import React, { useState, useEffect } from 'react';
import api from '../../services/api/api';

function CotacaoDolar() {
  const [cotacaoDolar, setCotacaoDolar] = useState();

  //consumação da api
  useEffect(() => {
    api.get('https://economia.awesomeapi.com.br/json/all')
    .then(response => {
        const cotacao = response.data
        setCotacaoDolar(cotacao)
    })
    .catch(error => {
      //gestão de erros
      console.log(error)
    })
  },[]);

  if(cotacaoDolar === undefined) {
    return <> </> 
  }

  return(
    <div className="page-principal-cotacoes">
      <span>Cotação do dia: <p>R${cotacaoDolar.USD.high}</p></span>
    </div>
  );
}

export default CotacaoDolar;