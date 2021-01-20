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


    const IOFDinheiro = props.valor * 0.011
    const IOFCartao = props.valor * 0.064
    
    const operacaoSemImposto = parseFloat((valorDolar * (taxaEstado/100))) + parseFloat(valorDolar)
    const operacaoComImposto = parseFloat((((valorDolar * (taxaEstado/100))) + parseFloat(valorDolar)) + parseFloat((IOFDinheiro) + parseFloat(props.valor)))
    const operacaoComImpostoCartao = parseFloat((((valorDolar * (taxaEstado/100))) + parseFloat(valorDolar)) + parseFloat((IOFCartao) + parseFloat(props.valor)))
    const operacaoSemImpostoReal = operacaoSemImposto * parseFloat(props.valor)
    const operacaoComImpostoReal = operacaoComImposto * parseFloat(props.valor)
    const operacaoComImpostoCartaoReal = operacaoComImpostoCartao * parseFloat(props.valor)

  return(
    <form className="page-principal-form" action="">
        <span>Digita o valor em Dólar: </span>
        <input className="page-principal-input-text"
        type="text"
        placeholder="US$"
        onChange={e => setValorDolar(parseInt(e.target.value))}/>
        <span>Taxa do estado: </span>
        <input type="text"
        placeholder="%"
        onChange={e => setTaxaEstado(parseInt(e.target.value))}/>
        <br/>
        <input className="page-principal-input-radio"
        type="radio" 
        value="Dinheiro"
        name="OpcaoPagamento"
        onChange={(e) => 
        {   
            props.taxa(IOFDinheiro)
            props.onSemImposto(`$${operacaoSemImposto}`)
            props.onComImposto(`$${operacaoComImposto.toFixed(2)}`)
            props.onSemImpostoReal(`R$${operacaoSemImpostoReal.toFixed(2)}`)
            props.onComImpostoReal(`R$${operacaoComImpostoReal.toFixed(2)}`)
        }}/> Dinheiro
        <input className="page-principal-input-radio-cartao"
        type="radio" 
        value="Cartao"
        name="OpcaoPagamento"
        onChange={(e) => 
        {   
            props.taxa(IOFCartao)
            props.onSemImposto(`$${operacaoSemImposto}`)
            props.onComImposto(`$${operacaoComImpostoCartao.toFixed(2)}`)
            props.onSemImpostoReal(`R$${operacaoSemImpostoReal.toFixed(2)}`)
            props.onComImpostoReal(`R$${operacaoComImpostoCartaoReal.toFixed(2)}`)
        }}/> Cartão
    </form>
  );
}

export default InputsForm;