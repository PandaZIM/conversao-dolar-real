/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../../services/api/api';

import './styles.scss'

interface dolarPriceProps {
  price(dolarQuoteHigh: number): void
}

export default function CotacaoDolar({ price }: dolarPriceProps) {
  const [dolarPrice, setDolarPrice] = useState();

  //consumação da api
  useEffect(() => {
    api.get('https://economia.awesomeapi.com.br/json/all')
      .then((response: any) => {
        const dolarQuote = response.data
        const dolarQuoteHigh = dolarQuote.USD.high
        console.log(dolarQuoteHigh)
        setDolarPrice(dolarQuoteHigh)
        price(dolarQuoteHigh)
      })
      .catch((error: any) => {
        //gestão de erros
        console.log(error)
      })
  }, []);

  //Se na primeira requisição vir undefined, retorne html basico até vir a proxima requisição
  if (dolarPrice === undefined) {
    return <> </>
  }

  return (
    <div className="page-principal-cotacoes">
      <span>Cotação do dia: <p>R${dolarPrice}</p></span>
    </div>
  );
}