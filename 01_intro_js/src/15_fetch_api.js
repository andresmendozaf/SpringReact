//consumir api
const httpClientes = fetch('https://jsonplaceholder.typicode.com/users');

/*
httpClientes.then(response => {
    response.json().then(data => {
        console.log(data);
    })
});
*/

httpClientes
    .then(response => response.json())
    .then(data => console.log(data));

//esto se imprimirá primero
console.log('prueba del tiempo de espera a la api');
