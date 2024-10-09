/*
*Arreglos, lista de objetos
*/

const productos = ['mesa', 'silla', 'notebook', 'teclado'];

productos.push('pantalla lcd', 'sony tv');

console.log(productos);

//Tiene distintos métodos
productos.forEach(elementos => console.log(elementos));


for (const prod of productos) {
    console.log(prod)
}

//Método más clásico
for (let i = 0; i < productos.length; i++) {
    const elementos = productos[i];
    console.log(elementos)
    
}

console.log(productos[0])