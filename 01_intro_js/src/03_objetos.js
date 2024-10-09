/**
 *Objetos, tienen directa relación con JSON 
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
console.log(facturaFuncion);

const mencionar = facturaFuncion.saludar();
console.log(mencionar);
console.log('Total : ' + facturaFuncion.total());
