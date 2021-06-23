import axios from 'axios';
import clientAxios from '../lib/clientAxios';

export interface ResponseItem{
    name:string,
    value?:string
}

export interface Token{
    token: string;
}

export interface IPedido {
    conteudo: string,
    pedido: string[],
    totPeso: number,//double
    totValor: number,//double
    obs: string,
    modalidade: number,//integer
    contaCorrente: string,
    tpColeta: string,
    tipoFrete: number,//integer
    cdUnidadeOri: string,
    cdUnidadeDes: string,
    cdPickupOri: string,
    cdPickupDes: string,
    nrContrato: number,//integer
    servico: number,//integer
    shipmentId: string,
    vlColeta: number,//double
    rem: {
        nome: string,
        cnpjCpf: number,
        ie: null,
        endereco: string,
        numero: number,
        compl: null,
        bairro: string,
        cidade: string,
        uf: string,
        cep: number,
        fone: number,
        cel: number,
        email: string,
        contato: string
    },
    des: {
        nome: string,
        cnpjCpf: number,
        ie: null,
        endereco: string,
        numero: number,
        compl: string,
        bairro: string,
        cidade: string,
        uf: string,
        cep: number,
        fone: number,
        cel: number,
        email: string,
        contato: string
    },
    dfe: {
            cfop: number,
            danfeCte: number,
            nrDoc: number,
            serie: number,
            tpDocumento: number,
            valor: number //double
        }[],
    volume:{
            altura: number,
            comprimento: number,
            identificador: number,
            largura: number,
            peso: number //double
        }[]
    
}

interface Iidentify{
    identify: string;
}
interface Icodigo{
    codigo: string;
}


const incluirPedido =  (token: Token, pedido:{}): Promise<ResponseItem> => {    
    
    return new Promise((resolve, reject)=>{
        clientAxios(token).post('pedido/incluir', pedido).then((res)=>{
            
            console.log(res.data);
        }).catch((err)=>{
            console.log("Deu errado!")
            console.log(err);
        });
    })
   
};
const cancelarPedido = (token: Token, Identify: Iidentify): Promise<ResponseItem> =>{
    
    return new Promise((resolve, reject)=>{

        clientAxios(token).post('pedido/cancelar', Identify).then((res)=>{    
            console.log(res.data);
        }).catch((err)=>{
            console.log("Deu errado!")
            console.log(err);
        });
    })
};  

const rastrear = (token: Token, codigo: Icodigo): Promise<ResponseItem>=>{

    return new Promise((resolve, reject)=>{
        
        clientAxios(token).post('tracking/consultar', codigo).then((res)=>{    
            console.log(res.data);
        }).catch((err)=>{
            console.log("Deu errado!")
            console.log(err);
        });
    })
}

export default incluirPedido;