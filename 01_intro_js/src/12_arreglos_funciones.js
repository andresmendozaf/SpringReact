/**
 * Operadores: método importante de los arreglos 
 * para manipular, filtrar y se usa mucho en react
 */

const papel = {
    producto: 'papel',
    price: 100,
    quantity: 10,
};

//Arreglo de facturas
const facturas = [
    {
        id: 1,
        nombre: 'Compras de oficina',
        cliente: {
            nombre: 'Maria',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'teclado',
                precio: 399,
                cantidad: 2,
            },
            {
                producto: 'mouse',
                precio: 200,
                cantidad: 1,
            },
            papel,
        ]
    },
    {
        id: 2,
        nombre: 'Compras de computacion',
        cliente: {
            nombre: 'Pepe',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'teclado',
                precio: 399,
                cantidad: 2,
            },
            {
                producto: 'monitor',
                precio: 800,
                cantidad: 1,
            },
            {
                producto: 'cpu intel',
                precio: 1000,
                cantidad: 10,
            },
        ]
    },
    {
        id: 3,
        nombre: 'Compras papeleria',
        cliente: {
            nombre: 'Jhon',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'lapiz',
                precio: 50,
                cantidad: 1,
            },
            {
                producto: 'papel',
                precio: 100,
                cantidad: 3,
            },
            papel,
        ]
    }
];

//Método MAP similar a forEach no retorna, map recibe y devuelve el objeto en una copia
const facturaNombre = facturas.map(fact => fact.nombre);
console.log(facturas)
console.log(facturaNombre)

const facturasClientes = facturas.map(fact => fact.cliente.nombre);

console.log(facturasClientes)

//busca con método find y devuelve una expresión boleana
const invoiceById = facturas.find(fact => fact.id === 2)
console.log(invoiceById)

const invoiceByClientName = facturas.find(fact => fact.cliente.nombre === 'Pepe')
console.log(invoiceByClientName)

const invoiceFilter = facturas.filter(fact => fact.id > 1)
console.log(invoiceFilter)

//para un nuevo lugar no el original
console.log('filtrar eliminar')
const invoiceDeleted = facturas.filter(i => i.id !== 2)
console.log(invoiceDeleted)

const invoiceFilter2 = facturas.filter(i => i.items.includes(papel) )
console.log(invoiceFilter2)

const resultado = facturas.some(i => i.cliente.nombre === 'Pepe');
console.log(resultado)
