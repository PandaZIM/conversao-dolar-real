/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../../services/api/api';

import './styles.scss'

function CotacaoDolar(props) {
  const [cotacaoDolar, setCotacaoDolar] = useState();

  //consumação da api
  useEffect(() => {
    api.get('https://economia.awesomeapi.com.br/json/all')
    .then(response => {
        const cotacao = response.data
        setCotacaoDolar(cotacao)
        props.onCotacao(cotacao)
    })
    .catch(error => {
      //gestão de erros
      console.log(error)
    })
  },[]);

  if(cotacaoDolar === undefined) {
    return <> </> 
  }

  const cotacaoDolarDia = cotacaoDolar.USD.high

  return(
    <div className="page-principal-cotacoes">
      <span>Cotação do dia: <p>R${cotacaoDolarDia}</p></span>
    </div>
  );
}

export default CotacaoDolar;