import { factura } from "../data/factura";

//Servicios de búsqueda o manipulación del objeto
export const getFacturas = () =>{

    // console.log(factura);

    /*Forma extensa de sumar las facturas
    
    let total = 0;
    factura.items.forEach(item => {
    total = total + (item.precio * item.cantidad);
    */
   const total = calculoTotal(factura.items);
    return {...factura, total};
}

export const calculoTotal = (items = []) => {
    return items
    .map(item => item.precio * item.cantidad) //currentValue
    .reduce(( accumulator, currentValue) => accumulator + currentValue, 0); 

}