import axios from 'axios';

export const cancelar = async (token: string, body:{}) =>{
    
    await axios.post(`http://www.jadlog.com.br/embarcador/api/pedido/cancelar`, body)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err));
}
