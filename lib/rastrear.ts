import axios from 'axios';

export const consultar = async (token: string, body:{}) =>{
    
    await axios.post(`http://www.jadlog.com.br/embarcador/api/tracking/consultar`, body)
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err));
}
