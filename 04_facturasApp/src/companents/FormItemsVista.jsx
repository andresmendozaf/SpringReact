import { useEffect, useState } from "react";

export const FormItemsVista = ( { handler }) => {

    const [formItemsState, setformItemsState] = useState({
        producto: '',
        precio: '',
        cantidad: '',
    });

    const { producto, precio, cantidad } = formItemsState;

    useEffect(() => {
        console.log('el precio cambió!')
    }, [formItemsState]);

    const onCambioInput = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        setformItemsState({
            ...formItemsState,
            [name]: value
        });
    };

    const onFacturaItemsSubmit = (event) => {
        event.preventDefault();

        if (producto.trim().length <= 1) return;
        if (precio.trim().length <= 1) return;
        if (isNaN(precio.trim())) {
            alert('Error el precio debe ser numérico')
            return;
        };
        if (cantidad.trim().length < 1) {
            alert('Error la cantidad debe ser mayor a 0')
            return;
        };
        if (isNaN(cantidad.trim())) {
            alert('Error la cantidad debe ser numérica')
            return;
        };

        handler(formItemsState);

        setformItemsState({
            producto: '',
            precio: '',
            cantidad: '',
        });

    }

    return (<>
     <form className="w-50" onSubmit={onFacturaItemsSubmit}>
                            <input
                                type="text"
                                name="producto"
                                value={producto}
                                placeholder="Producto"
                                className="form-control m-3"
                                onChange={onCambioInput} />
                            <input
                                type="text"
                                name="precio"
                                value={precio}
                                placeholder="Precio"
                                className="form-control m-3"
                                onChange={onCambioInput} />
                            <input
                                type="text"
                                name="cantidad"
                                value={cantidad}
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={onCambioInput} />
                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Nuevo item
                            </button>
                        </form>
    </>
        
    )
}