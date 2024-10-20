import PropTypes from 'prop-types';

export const FilaItemVista = ({id, producto, precio, cantidad, handlerBorrarItem}) => {
    const subtotal = precio * cantidad;

    return (
        <>

            <tr>
                <td> {producto} </td>
                <td> {precio} </td>
                <td> {cantidad} </td>
                <td> {subtotal} </td>
                <td><button 
                className='btn btn-danger'
                onClick={() => handlerBorrarItem(id)}>eliminar</button></td>
            </tr>
        </>
    )
}

FilaItemVista.propTypes = {
    producto: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
}