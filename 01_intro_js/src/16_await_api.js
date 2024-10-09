//consumir api


/*
httpClientes.then(response => {
    response.json().then(data => {
        console.log(data);
    })
});
*/

// httpClientes
//     .then(response => response.json())
//     .then(data => console.log(data));

//await procesa toda la data de forma más simple  pero debe ser utilizada desde una función
const buscarTodosUsuarios = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
};

const usuarios = await buscarTodosUsuarios();
console.log(usuarios);
//esto se imprimirá después 
console.log('prueba del tiempo de espera a la api');
