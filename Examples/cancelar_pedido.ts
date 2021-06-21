import * as cancelar from '../src/cancelar';

//podera escolher algum desses meios para cancelar
const data = {
    codigo: {
        codigo: "123456"
    }, 
    shipment:{
        shipmentId: "00000000000000"
    }
}
console.log(cancelar.cancel({
    Token: 'asdsdasdad',
    codigo: data.codigo
}));