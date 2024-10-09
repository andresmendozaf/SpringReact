/*
 * Arrelgos, operador spread (...)
 * Crea una nueva instancia de arreglos unir, concatenar, combinar
 */

const productos = ['mesa', 'silla', 'notebook', 'teclado'];
//push agrega a la misma instancia
productos.push('monitor', 'parlante', 'telefono');
//diferecia CONCAT devuelve una nueva instancia
const productos2 = productos.concat(['pantalla lcd', 'sony tv']);

const frutas = ['peras', 'manzanas', 'sandias', 'frutillas'];

//Arreglos se escriben en plural
const mercado = [...productos2, ...frutas, 'lechuga', 'papas', 'uvas'];

const mercado2 = productos2.concat(frutas).concat('lechuga', 'papas', 'uvas');

console.log(productos2);
console.log(mercado2);
