/**
 * Se utiliza DOM, en lo escencial es una interfaz API para documentos HTML
 * para ir anidando LI en UL (html)
 * 
 * Esto es para a futuro comparar con REACT
 */
const buscarTodosUsuarios = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await response.json();
    const ul = document.createElement('ul');
    
    usuarios.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    });

    document.getElementById('root').append(ul);
};

buscarTodosUsuarios();

console.log('prueba del tiempo de espera a la api');
