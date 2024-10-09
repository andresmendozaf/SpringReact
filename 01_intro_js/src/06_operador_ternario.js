/**
 * Operador ternario
 * Parecido al if, siempre devuelve un valor 
 */

const promedio = 5.9;

let estado = '';

estado = (promedio >= 5.5) ? 'Aprobado' : 'Rechazado';

console.log(`Resultado: ${estado}`);

let max = 0;

const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es ${max}`)
