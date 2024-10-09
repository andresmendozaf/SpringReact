const papel = {
    producto: 'papel',
    price: 100,
    quantity: 10,
};


const facturas = [
    {
        id: 1,
        nombre: 'Compras de oficina',
        cliente: {
            nombre: 'Maria',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'teclado',
                precio: 399,
                cantidad: 2,
            },
            {
                producto: 'mouse',
                precio: 200,
                cantidad: 1,
            },
            papel,
        ]
    },
    {
        id: 2,
        nombre: 'Compras de computacion',
        cliente: {
            nombre: 'Pepe',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'teclado',
                precio: 399,
                cantidad: 2,
            },
            {
                producto: 'monitor',
                precio: 800,
                cantidad: 1,
            },
            {
                producto: 'cpu intel',
                precio: 1000,
                cantidad: 10,
            },
        ]
    },
    {
        id: 3,
        nombre: 'Compras papeleria',
        cliente: {
            nombre: 'Jhon',
            apellido: 'Doe',
        },
        items: [
            {
                producto: 'lapiz',
                precio: 50,
                cantidad: 1,
            },
            {
                producto: 'papel',
                precio: 100,
                cantidad: 3,
            },
            papel,
        ]
    }
];

const invoiceByClientName = (clienteNombre) => {
    return facturas.find(i => i.cliente.nombre === clienteNombre);
};

const invoiceById = (id) => {
    return facturas.find(i => i.id === id)
}

//para poder reutilizar la promesa
const findInvoicesByID = (id) => {
    const promise = new Promise((resolve, reject) => {

        //para simular tarea asincrona
        setTimeout(() => {
            const resultado = invoiceById(id);
            if (resultado){
                resolve(resultado);
            }else{
                reject('error no existe la factura con ese ID');
            }
    
            // console.log(resultado);
        }, 2500);
    });

    return promise;
};

export {
    papel,
    facturas as default,
    invoiceByClientName,
    invoiceById,
    findInvoicesByID
}