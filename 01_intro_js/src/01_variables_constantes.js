/*
Plantilla vite se utiliza por la implementación completa
*/

//let es la actualización de var(variable)
let nombre = 'Pepe';
nombre = 'Andrés';

//const = constantes de la app / valor inmutable
const apellido = 'Mendoza';
const condicion = true;

if (condicion) {
    const apellido = 'Suárez';
    console.log('Apellido dentro de condición : ' + apellido);
}

//concatenación de String
console.log('Hola mundo!!!!' + nombre + ' ' + apellido);
    
//interpolación de string
console.log(`Hola mundo!!!! ${nombre} - ${apellido}`);