//una forma de traer datos desde el componente padre (main)
//export function HolaMundo(props) {

//forma más limpia de hacer llamado a los props...opción de estructura
// export function HolaMundo( {usuario,id} ) {
import PropTypes from 'prop-types';
import { Titulo } from './components/Titulo';
import { DetalleUsuario } from './components/DetalleUsuario';
import { Libro } from './components/Libro';

export const HolaMundoApp = ( {usuario, id, titulo, libro } ) => {


    console.log(titulo);
    const nombre = 'Andres';

    return (
        <>
            <Titulo titulo='Hola Mundo!!!'/>
            {/*forma con props */}
            {/* <div>Que tal {props.usuario} con el id {props.id}</div> */}
            
            {/*forma con destructuración */}
            <DetalleUsuario usuario={usuario} id={id}/>
            <Libro libro={libro}/>

        </>
    );
}

//se instalan las dependencias y se utiliza PropTypes para definir validaciones 
HolaMundoApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    usuario:PropTypes.object.isRequired
}

//en caso de que los parametros no vengan, pero primero utiliza el padre
HolaMundoApp.defaultProps = {
    titulo: 'Hola mundo por defecto!',
    libro: 'El Señor de los Anillos',
}