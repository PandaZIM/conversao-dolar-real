/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

function InputsForm(props) {
    const [valorDolar, setValorDolar] = useState(0);
    const [taxaEstado, setTaxaEstado] = useState(0);

    const [IOF, setIOF] = useState();
    const [opcaoPagamento, setOpcaoPagamento] = useState();


    const IOFsemImposto = props.valor * 0.011
    const operacaoSemImposto = parseInt((valorDolar * (taxaEstado/100))) + parseInt(valorDolar)
    const operacaoComImposto = parseInt(props.valor) + parseInt((props.valor) + props.valor)

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
            IOFsemImposto
            props.funcoes(`$${operacaoSemImposto}`, `$${operacaoComImposto}`)
        }}/> Dinheiro
        <input className="page-principal-input-radio"
        type="radio" 
        value="Dinheiro"
        name="OpcaoPagamento"
        onChange={(e) => 
        {   
            setOpcaoPagamento(e.target.value)
         /*    setIOF(cotacaoDolar.USD.high * 0.011) */
            props.funcoes(`$${operacaoSemImposto}`, `$${operacaoComImposto}`)
        }}/> Cartão
    </form>
  );
}

export default InputsForm;