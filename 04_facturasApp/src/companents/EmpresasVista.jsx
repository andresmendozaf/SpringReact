import PropTypes from 'prop-types';
export const EmpresasVista = ({ titulo, compania }) => {

    const { nombre, rut } = compania;

    return (
        <>
            <h3>{titulo}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nombre}</li>
                <li className="list-group-item">{rut}</li>
            </ul>
        </>
    )
}

EmpresasVista.propTypes = {
    titulo: PropTypes.string.isRequired,
    compania: PropTypes.object.isRequired,
}