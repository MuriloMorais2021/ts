import axios, {AxiosInstance} from 'axios';

interface IClientAxios{
    token: String
}

const clientAxios = ({token}: IClientAxios): AxiosInstance =>{
    console.log('token config -> '+ token)
    return axios.create({
        baseURL: 'http://www.jadlog.com.br/embarcador/api/',
        headers:{
            Authorization: token
        }
    });
}

export default clientAxios;