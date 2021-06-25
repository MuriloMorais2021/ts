import rastrear from '../src';

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

rastrear(
    {
        token: 'a8sdyh1p23unbh'
    }, 
    {
        codigo: data 
    }
);