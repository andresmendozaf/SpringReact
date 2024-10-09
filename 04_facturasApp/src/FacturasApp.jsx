import { useEffect, useState } from "react";
import { getFacturas, calculoTotal } from "./services/getFacturas";
import { ClientesVista } from "./companents/ClientesVista";
import { EmpresasVista } from "./companents/EmpresasVista";
import { FacturasVista } from "./companents/FacturasVista";
import { ListaItemsVista } from "./companents/ListaItemsVista";
import { TotalVista } from "./companents/TotalVista";
import { FormItemsVista } from "./companents/FormItemsVista";

const facturaInicial = {

    id: 0,
    nombre: '',
    cliente: {
        nombre: '',
        apellido: '',
        direccion: {
            pais: '',
            ciudad: '',
            calle: '',
            numero: 0
        }
    },
    compania: {
        nombre: '',
        rut: 0,
    },
    items: [
    ]
};

export const FacturasApp = () => {

    //no es buena práctica porque no se reutiliza el objeto con hooks
    /**
    const factura = getFacturas(); 

    return(
        <>
        <h1>Ejemplo de factura </h1>
        <ul>
            <li>ID : {factura.id}</li>
            <li>Nombre : {factura.nombre}</li>
        </ul>

        <h3>Datos del Cliente</h3>
        <ul>
        <li>Nombre : {factura.cliente.nombre}</li>
        <li>Apellido : {factura.cliente.apellido}</li>
        <li>País : {factura.cliente.direccion.pais}</li>
        <li>Ciudad : {factura.cliente.direccion.ciudad}</li>
        <li>Dirección : {factura.cliente.direccion.calle}</li>
        <li>Número : {factura.cliente.direccion.numero}</li>
        </ul>
        </>
    )
    */

    const [formActivo, setFormActivo] = useState(false);

    const [total, setTotal] = useState(0);

    const [contador, setContador] = useState(4);

    const [factura, setFactura] = useState(facturaInicial);

    const [items, setItems] = useState([]);

    const {id, nombre, cliente, compania } = factura;

    useEffect(() => {
        const json = getFacturas();
        console.log(json);
        setFactura(json);
        setItems(json.items);
    }, []);

    useEffect(() => {
        setTotal(calculoTotal(items));
        console.log('el precio cambió!')
    }, [items]);
    
    const handlerAddItems = ({producto, precio, cantidad}) => {

        setItems([...items, {
            id: contador,
            producto: producto.trim(),
            precio: parseInt(precio.trim(), 10),
            cantidad: parseInt(cantidad.trim(), 10)
        }]);

        setContador(contador + 1);
    }

    const handlerBorrarItem = (id) => {
        setItems(items.filter( item => item.id !== id ))
    }

    const onFormActivo = () => {
        setFormActivo(!formActivo);
    }



    //Forma extendida para el useState
    // const [productoValor, setProductoValor] = useState('');
    // const [precioValor, setPrecioValor] = useState('');
    // const [cantidadValor, setCantidadValor] = useState('');





    // const cambioEnProducto = ({target}) => {
    //     console.log(target.value);
    //     setProductoValor(target.value);
    // };

    // const cambioEnPrecio = ({target}) => {
    //     console.log(target.value);
    //     setPrecioValor(target.value);
    // };

    // const cambioEnCantidad = ({target}) => {
    //     console.log(target.value);
    //     setCantidadValor(target.value);
    // };

    

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo de factura
                    </div>
                    <div className="card-body">
                        <FacturasVista id={id} nombre={nombre} />
                        <div className="row my-3">
                            <div className="col">
                                <ClientesVista titulo="Datos del Cliente " cliente={cliente} />
                            </div>
                            <div className="col">
                                <EmpresasVista titulo="Datos de la Empresa" compania={compania} />
                            </div>
                        </div>
                        <ListaItemsVista titulo="Productos de la factura" items={items} handlerBorrarItem={ handlerBorrarItem }/>
                        <TotalVista total={total} />
                        <button className="btn btn-secondary"
                        onClick={ onFormActivo }>{!formActivo? 'Agregar Item': 'Ocultar Formulario'} </button>
                        { !formActivo || <FormItemsVista handler = { handlerAddItems}/>}
                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}