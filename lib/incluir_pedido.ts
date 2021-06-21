import axios from 'axios';

export const enviar = async (token: string, body:{}) =>{
    
    await axios.post(`http://www.jadlog.com.br/embarcador/api/pedido/incluir`, body)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err));
}

