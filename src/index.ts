import axios from 'axios';
import * as incluir from '../lib/incluir_pedido';

export interface ResponseItem{
    name:string,
    value?:string
}

export interface Token{
    token: string,
    Pedido: {}
    
}

export interface IncluirPedido {
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
    dfe: [
        {
            cfop: number,
            danfeCte: number,
            nrDoc: number,
            serie: number,
            tpDocumento: number,
            valor: number //double
        },
        {
            cfop: number,
            danfeCte: number,
            nrDoc: number,
            serie: number,
            tpDocumento: number,
            valor: number //string
        }
    ],
    volume: [
        {
            altura: number,
            comprimento: number,
            identificador: number,
            largura: number,
            peso: number //double
        },
        {
            altura: number,
            comprimento: number,
            identificador: number,
            largura: number,
            peso: number //double
        }
    ]
}


const incluirPedido =  (token: Token): Promise<ResponseItem> => {
    const numberToken = token.token


    return new Promise((resolve, reject)=>{
         incluir.enviar(numberToken, token.Pedido);
    })
   
};
export {incluirPedido};