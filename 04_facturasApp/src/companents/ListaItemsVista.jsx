import PropTypes from 'prop-types';
import { FilaItemVista } from "./FilaItemVista"

//PROPS titulo e items
export const ListaItemsVista = ({ titulo, items, handlerBorrarItem }) => {

    return (
        <>

            <h4>{titulo}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/*map es para la iteración del objeto*/}
                    {items.map(({ id, producto, precio, cantidad }) => (
                        <FilaItemVista
                            key={id}
                            producto={producto}
                            precio={precio}
                            cantidad={cantidad}
                            handlerBorrarItem={handlerBorrarItem}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

ListaItemsVista.propTypes = {
    titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

