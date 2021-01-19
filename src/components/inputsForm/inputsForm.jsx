/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

function InputsForm(props) {
    if(props.valor === undefined){
      return <> </>
    }

    const [valorDolar, setValorDolar] = useState(0);
    const [taxaEstado, setTaxaEstado] = useState(0);

    const [opcaoPagamento, setOpcaoPagamento] = useState();


    const IOFDinheiro = props.valor * 0.011
    const IOFCartao = props.valor * 0.064
    
    const operacaoSemImposto = parseFloat((valorDolar * (taxaEstado/100))) + parseFloat(valorDolar)
    const operacaoComImposto = parseFloat((((valorDolar * (taxaEstado/100))) + parseFloat(valorDolar)) + parseFloat((IOFDinheiro) + parseFloat(props.valor)))

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
        <input className="page-principal-input-radio"
        type="radio" 
        value="Dinheiro"
        name="OpcaoPagamento"
        onChange={(e) => 
        {   
            setOpcaoPagamento(e.target.value)
            props.taxa(IOFDinheiro)
            props.onSemImpostoDinheiro(`$${operacaoSemImposto}`)
            props.onComImpostoDinheiro(`$${operacaoComImposto}`)
        }}/> Dinheiro
        <input className="page-principal-input-radio"
        type="radio" 
        value="Cartao"
        name="OpcaoPagamento"
        onChange={(e) => 
        {   
            setOpcaoPagamento(e.target.value)
            props.taxa(IOFCartao)
            props.funcoes(operacaoSemImposto, operacaoComImposto)
        }}/> Cartão
    </form>
  );
}

export default InputsForm;