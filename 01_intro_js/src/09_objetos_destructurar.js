/**
 * Destructurar, desarmar sus atributos como si fueran variables
 */

const usuario = {
    username: 'andres',
    email: 'correo@google.com',
    edad: 20,
    ranking: 9,
};

// const username = user.username;
// const ranking = user.ranking;
// const edad = user.edad;

//Obtengo {los atributos} del = objeto
const { ranking, edad, username } = usuario;

console.log(`${username} tiene ${edad} de edad`);
console.log(ranking);
