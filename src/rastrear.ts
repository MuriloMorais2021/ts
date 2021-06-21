import * as rastrear from '../lib/rastrear';

interface Cod{
    Token: string,
    codigo: {}
}
interface response{
    nome: string
}

const rastreio = (cod: Cod): Promise<response> =>{

    return new Promise((resolve, reject)=>{
        rastrear.consultar(cod.Token, cod.codigo);
    });
}

export {rastreio};