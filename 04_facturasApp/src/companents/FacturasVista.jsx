import PropTypes from 'prop-types';
export const FacturasVista = ({id, nombre}) => {

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">ID : {id}</li>
                <li className="list-group-item">Nombre : {nombre}</li>
            </ul>
        </>
    )
}

FacturasVista.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired
}
