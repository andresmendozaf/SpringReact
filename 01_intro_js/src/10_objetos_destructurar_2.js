/**
 * Destructurar dentro de una función, se utiliza mucho en REACT
 */

const usuario = {
    username: 'andres',
    email: 'correo@google.com',
    edad: 20,
    ranking: 9,
};

const detail = ( {username, email} ) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`)
}

detail(usuario)

