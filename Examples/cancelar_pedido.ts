import cancelarPedido from '../src/';

//podera escolher algum desses meios para cancelar
const data = {
    codigo: {
        codigo: "123456"
    },
    shipment: {
        shipmentId: "00000000000000"
    }
}
// cancelarPedido(
//     {
//         token: 'a8sdyh1p23unbh'
//     }, 
//     {
//         shipmentId: "00000000000000"
//     }
// );