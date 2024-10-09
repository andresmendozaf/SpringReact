/* 
Funciones
*/

// función más básica
function decirHola(){
    console.log('Hola mundo!!!');
}
decirHola();

//Función con retorno
function saludar(){
    const bienvenida = 'Bienvenidos al curso';
    return bienvenida;
}

//Opciones de llamar a la función
const resultado = saludar();
console.log(resultado);
console.log('Directa = ' + saludar());

//Función con parámetros/argumentos
function presentarse(name){
    const nombre = `Mi nombre es ${name}`;
    return nombre;
}
const prueba = presentarse('Andrés');
console.log(prueba);

//Función con parámetros/argumentos fijos, para llamada sin argumentos
function nombreEdad(name = 'Martín', edad = 12){
    const  yoSoy = `Mi nombre es ${name} y mi edad es ${edad}  `;
    return yoSoy;
}
console.log(nombreEdad());
console.log(nombreEdad('Andrés', ));

//Función anónima o lambda, la flecha reemplaza function
const diaMes = (dia = 'lunes', mes = 3) => {
    const fecha = `Hoy es ${dia} del mes ${mes}`;
    return fecha;
}
console.log(diaMes());

//Ventajas de la flecha, EN UNA SOLA LÍNEA
const regionPais = (region = 'RM', pais = 'Chile') => `Soy de la ${region} del país ${pais}`;
console.log(regionPais());

const suma = (a = 0, b = 0) => a + b;
console.log(suma(5,10));