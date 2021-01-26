/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

import './styles.scss'

function InputsForm(props) {
    if(props.valor === undefined){
      return <> </>
    }

    const [valorDolar, setValorDolar] = useState(0);
    const [taxaEstado, setTaxaEstado] = useState(0);

    //Regra de negócio
    const IOFDinheiro = isNaN(valorDolar * 0.011) ? 0 : valorDolar * 0.011
    const IOFCartao = isNaN(valorDolar * 0.064) ? 0 : valorDolar * 0.064
    const impostoEstado = (valorDolar * (taxaEstado/100))
    
    const operacaoSemImposto = isNaN(parseFloat(valorDolar)) ? 0 : parseFloat(valorDolar)
    const operacaoComImposto = isNaN(parseFloat(valorDolar + impostoEstado + IOFDinheiro)) ? 0 : parseFloat(valorDolar + impostoEstado + IOFDinheiro)
    const operacaoSemImpostoCartao = isNaN(parseFloat(valorDolar)) ? 0 : parseFloat(valorDolar)
    const operacaoComImpostoCartao = isNaN(parseFloat(valorDolar + impostoEstado + IOFCartao)) ? 0 : parseFloat(valorDolar + impostoEstado + IOFCartao)

    const operacaoSemImpostoReal = operacaoSemImposto * parseFloat(props.valor)
    const operacaoComImpostoReal = operacaoComImposto * parseFloat(props.valor)
    const operacaoSemImpostoCartaoReal = operacaoSemImpostoCartao * parseFloat(props.valor)
    const operacaoComImpostoCartaoReal = operacaoComImpostoCartao * parseFloat(props.valor)
    

  return(
    <form className="page-principal-form" action="">
        <span>Digite o valor em Dólar: </span>
        <input className="page-principal-input-text"
        type="number"
        placeholder="US$"
        onChange={e => setValorDolar(parseInt(e.target.value))} />
        <span>Taxa do estado: </span>
        <input className="page-principal-input-text"
        type="number"
        placeholder="%"
        onChange={(e) => {
          setTaxaEstado(parseInt(e.target.value))
        }}/>
        <br/>
        <input className="page-principal-input-radio"
        type="radio" 
        value="Dinheiro"
        name="OpcaoPagamento"
        onChange={() => 
        {   
            props.taxa(IOFDinheiro.toFixed(2))
            props.onSemImposto(`$${operacaoSemImposto.toFixed(2)}`)
            props.onComImposto(`$${operacaoComImposto.toFixed(2)}`)
            props.onSemImpostoReal(`R$${operacaoSemImpostoReal.toFixed(2)}`)
            props.onComImpostoReal(`R$${operacaoComImpostoReal.toFixed(2)}`)
        }}/> Dinheiro
        <input className="page-principal-input-radio-cartao"
        type="radio" 
        value="Cartao"
        name="OpcaoPagamento"
        onChange={() => 
        {   
            props.taxa(IOFCartao.toFixed(2))
            props.onSemImposto(`$${operacaoSemImpostoCartao.toFixed(2)}`)
            props.onComImposto(`$${operacaoComImpostoCartao.toFixed(2)}`)
            props.onSemImpostoReal(`R$${operacaoSemImpostoCartaoReal.toFixed(2)}`)
            props.onComImpostoReal(`R$${operacaoComImpostoCartaoReal.toFixed(2)}`)
        }}/> Cartão
    </form>
  );
}

export default InputsForm;