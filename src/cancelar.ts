import * as cancelar from '../lib/cancelar';

interface Cod{
    Token: string,
    codigo: {}
}
interface response{
    nome: string
}

const cancel = (cod: Cod): Promise<response> =>{

    return new Promise((resolve, reject)=>{
        cancelar.cancelar(cod.Token, cod.codigo);
    });
}

export {cancel};