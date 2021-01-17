/* import React from 'react';
import api from '../../services/api/api';

// import { Container } from './styles';

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

function pagePrincipal() {
  return(

  );
}

export default pagePrincipal; */