/**
 * Desestructurar arreglos con spread
 */

const usuarios = ['pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa'];

const [pepe, ana, maria, ...rest] = usuarios;

console.log(pepe, ana, maria, ...rest);