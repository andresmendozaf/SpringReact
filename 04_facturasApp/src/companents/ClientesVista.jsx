import PropTypes from 'prop-types';
export const ClientesVista = ({ titulo, cliente }) => {

    //nombre: alias - direccion:{desectructuración anidada}
    const { nombre: nombreCliente,
        apellido,
        direccion: { pais, ciudad, calle, numero }
    } = cliente;

    return (
        <>
            <h3>{titulo}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nombreCliente} {apellido}</li>
                <li className="list-group-item">{pais}/{ciudad}</li>
                <li className="list-group-item">{calle}</li>
                <li className="list-group-item">{numero}</li>
            </ul>
        </>
    )
}

ClientesVista.propTypes = {
    titulo: PropTypes.string.isRequired,
    cliente: PropTypes.object.isRequired,
}