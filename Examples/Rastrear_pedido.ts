import * as rastrear from '../src/rastrear';

//consulta por pedido
const data = {
    consulta: [
        {
            pedido: "12345670"
        },
        {
            pedido: "12345671"
        },
        {
            pedido: "12345673"
        }
    ]
}

rastrear.rastreio({
    Token: 'asdsasdasd',
    codigo: data
});