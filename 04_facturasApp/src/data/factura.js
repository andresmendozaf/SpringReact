export const factura = {

    id: 10,
    nombre: 'Componentes PC',
    cliente: {
        nombre: 'Andrés',
        apellido: 'Mendoza',
        direccion: {
            pais: 'Chile',
            ciudad: 'Santiago',
            calle: 'Huequen',
            numero: '6027'
        }
    },
    compania: {
        nombre: 'PcFactory',
            rut: 1234567,
    },
    items: [
        {
            id: 1,
            producto: 'CPU Intel i7',
            precio: 400,
            cantidad: 1,
        },
        {
            id: 2,
            producto: 'Teclado',
            precio: 150,
            cantidad: 1,
        },
        {
            id: 3,
            producto: 'Monitor ASUS',
            precio: 300,
            cantidad: 3,
        },
    ]
}


