//importar desde otro archivo para reutilizar código
import  facturas, {  papel, invoiceByClientName } from './datos/facturas';


const facturaNombre = facturas.map(i => i.nombre);
console.log(facturas)
console.log(facturaNombre)

const facturasClientes = facturas.map(i => i.cliente.nombre);

console.log(facturasClientes);

const invoiceById = facturas.find(i => i.id === 2);
console.log(invoiceById)

// const invoiceByClientName = facturas.find(i => i.cliente.nombre === 'Pepe')
console.log('Buscar por nombre de cliente');
console.log(invoiceByClientName('Pepe'));

const invoiceFilter = facturas.filter(i => i.id > 1)
console.log(invoiceFilter)

console.log('filter eliminar')
const invoiceDeleted = facturas.filter(i => i.id !== 2)
console.log(invoiceDeleted)

const invoiceFilter2 = facturas.filter(i => i.items.includes(papel) )
console.log(invoiceFilter2)

const resultado = facturas.some(i => i.cliente.nombre === 'Pepe');
console.log(resultado)
