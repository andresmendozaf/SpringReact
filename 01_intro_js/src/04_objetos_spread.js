/**
 *Objetos, comparar y clonar sin modificar el original
 */

//Primero deben guardarse dentro de alguna parte (Ej. JSON), estructura básica
const factura = {
    id: 10,
    nombre: 'Compras de oficina',
    fecha: new Date(),
    cliente: 'Marcelo Figueroa',
    total: 1000,
};
factura.nombre = 'Pablo Escobar';
console.log(factura);

//Objetos con relaciones
const facturaRelaciones = {
    id: 10,
    nombre: 'Compras de oficina',
    fecha: new Date(),
    cliente: {
        id: 2,
        nombre: 'Marcelo',
        apellido: 'Figueroa',
        edad: 25,
    },
    total: 1000,
};
facturaRelaciones.cliente.edad = 27;
console.log(facturaRelaciones);

//Objetos con métodos/funciones
const facturaFuncion = {
    id: 10,
    nombre: 'Compras de oficina',
    fecha: new Date(),
    cliente: {
        id: 2,
        nombre: 'Marcelo',
        apellido: 'Figueroa',
        edad: 25,
    },
    items: [
        {
            producto: 'teclado',
            precio: 4000,
            cantidad: 2,
        },
        {
            producto: 'mouse',
            precio: 7000,
            cantidad: 6,
        },
        {
            producto: 'monitor',
            precio: 35000,
            cantidad: 1,
        },
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item => {total = total + item.precio * item.cantidad});
        return total;
    },
    saludar: function(){
        return `Hola ${this.cliente.nombre}`;
    }
};

//misma instancia de objeto, se hace referencia al mismo espacio de memoria
const factura2 = factura;

const comparar = factura == factura2;
const identico = factura === factura2;
//Evalúa contenido
console.log('Aca estamos comparando : ' + comparar);
//Evalúa contenido y tipo de dato
console.log('Aca estamos consultado si es identico : ' +identico);

if (comparar) console.log(`IF comparar ${comparar}`)
else console.log(`ELSE No son iguales`);

factura2.id = 55;
console.log(factura.id);

//Nueva instacia, tiene misma estructura pero en un nuevo lugar, esparcir o copiar
const facturaNueva = { ...factura };
const identicoClon = factura === facturaNueva;
//No sería lo mismo
if (identicoClon) console.log(`IF comparar ${identicoClon}`)
else console.log(`ELSE No son iguales`);

facturaNueva.id = 70;
console.log(factura.id);
console.log(facturaNueva.id);