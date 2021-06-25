import axios from 'axios';
import clientAxios from '../lib/clientAxios';

export interface ResponseItem {
    codigo: string;
    data: string;
    status: string;
    unidade: string
}

export interface IToken {
    token: string;
}

export interface IPedido {
    conteudo: string;
    pedido: string[];
    totPeso: number;
    totValor: number;
    obs: string;
    modalidade: number;
    contaCorrente: string;
    tpColeta: string;
    tipoFrete: number;
    cdUnidadeOri: string;
    cdUnidadeDes?: null;
    cdPickupOri?: null;
    cdPickupDes: string;
    nrContrato: number;
    servico: number;
    shipmentId?: null;
    vlColeta?: null;
    rem: {
        nome: string;
        cnpjCpf: string;
        ie?: null;
        endereco: string;
        numero: string;
        compl?: null;
        bairro: string;
        cidade: string;
        uf: string;
        cep: string;
        fone: string;
        cel: string;
        email: string;
        contato: string;
    };
    des: {
        nome: string;
        cnpjCpf: string;
        ie?: null;
        endereco: string;
        numero: string;
        compl?: null;
        bairro: string;
        cidade: string;
        uf: string;
        cep: string;
        fone: string;
        cel: string;
        email: string;
        contato: string;
    };
    dfe: {
        cfop: string;
        danfeCte: string;
        nrDoc: string;
        serie: string;
        tpDocumento: number;
        valor: number
    }[];
    volume: {
        altura: number;
        comprimento: number;
        identificador: string;
        largura: number;
        peso: number;
    }[];

}

interface Iidentify {
    shipmentId: string;
}

interface Icodigo {
    codigo: {};
}

interface IResponsePedido {
    codigo: string;
    shipmentId: string;
    status: string;
    etiqueta: {
        arquivo: string;
        volume: {
            codbarra: string;
            lastMile: string;
            posicao: string;
            prioridade: number;
            rota: string;
            rua: string;
            seqVolume: number;
            unidadeDestino: string;
        }[];
    };
}
interface IresponseCancel {
    shipmentId: string,
    status: string
}


const incluirPedido = (token: IToken, pedido: IPedido): Promise<IResponsePedido> => {

    return new Promise((resolve, reject) => {
        clientAxios(token).post('pedido/incluir', pedido).then((res) => {

            if (res.data.erro) {
                return reject(
                    new Error(`Erro -> ${res.data.erro}`)
                );
            }
            return resolve({
                codigo: res.data.codigo,
                shipmentId: res.data.shipmentId,
                status: res.data.status,
                etiqueta: {
                    arquivo: res.data.arquivo,
                    volume: [{
                        codbarra: res.data.codbarra,
                        lastMile: res.data.lastMile,
                        posicao: res.data.posicao,
                        prioridade: res.data.prioridade,
                        rota: res.data.rota,
                        rua: res.data.rua,
                        seqVolume: res.data.seqVolume,
                        unidadeDestino: res.data.unidadeDestino
                    }]
                }
            });
        }).catch((err) => {
            console.log(err.response.data);
        });
    })

};

const cancelarPedido = (token: IToken, Identify: Iidentify): Promise<IresponseCancel> => {
    return new Promise((resolve, reject) => {
        clientAxios(token).post('pedido/cancelar', Identify).then((res) => {
            console.log(res);
            if (res.data.erro) {
                return reject(
                    new Error(`Erro -> ${res.data.erro}`)
                );
            };
            return resolve({
                shipmentId: res.data.shipmentId,
                status: res.data.status
            });

        }).catch((err) => {
            console.log(err.response.data);
        });
    });
};

const rastrear = (token: IToken, codigo: Icodigo): Promise<ResponseItem> => {

    return new Promise((resolve, reject) => {
        clientAxios(token).post('tracking/consultar', codigo).then((res) => {
            console.log(res.data);

            //depois a variavel consulta devera receber res.data.consulta
            //deixei assim apenas para nao dar erro quando ele for percorrer cada item do obj
            var consulta = [
                {
                    cte: "1800000000000",
                    error: {
                        id: -1,
                        descricao: "Nao localizado."
                    }
                },
                {
                    cte: "1800000000002",
                    tracking: {
                        codigo: "1800000000002",
                        shipmentId: "00000000000000",
                        dacte: "000000000000000000000000000000000000000000000",
                        dtEmissao: "19/04/2018",
                        status: "EMISSAO",
                        valor: 32.75,
                        peso: 20,
                        eventos: [
                            {
                                data: "2018-04-19 20:33:39",
                                status: "EMISSAO",
                                unidade: "JADLOG SEDE"
                            }
                        ],
                        volumes: [
                            {
                                peso: 12,
                                altura: 0,
                                largura: 0,
                                comprimento: 0
                            },
                            {
                                peso: 12,
                                altura: 0,
                                largura: 0,
                                comprimento: 0
                            }
                        ]
                    }
                }
            ];

            consulta.map((item) => {
                if (item.error) {
                    return reject({
                        error: item
                    });
                } else {
                    return resolve({
                        codigo: item.tracking.codigo,
                        data: item.tracking.eventos[0].data,
                        status: item.tracking.eventos[0].status,
                        unidade: item.tracking.eventos[0].unidade
                    });
                }
            });

        }).catch((err) => {
            console.log("Deu errado!")
            console.log(err.response.data);
        });
    })
}

export default incluirPedido;
