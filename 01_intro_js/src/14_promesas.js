/**
 * Promesas, para tareas asincronas, que se demoren respuestas/resultados/apis
 */
import { findInvoicesByID } from './datos/facturas';

findInvoicesByID(2)
//funciones simplificadas = metodos de referencia pasa json sale json
    .then(console.log)
    .catch(console.error);

/*
*En caso de que la promesa no se reutiliza

promise.then((json) => {
    console.log(json);
    console.log('REALIZADA!!! la tarea con demora');
}).catch(console.error);
*/


