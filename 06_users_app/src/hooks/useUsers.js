import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUser = [
    {
        id: 1,
        username: 'pepe',
        password: '123456',
        email: 'pepe@correo.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUser);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {
        // console.log(user);
        dispatch({
            type : (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        })

        Swal.fire({
            title: (user.id === 0) ?
                "Usuario Creado" :
                "Usuario Actualizado",
            text: (user.id === 0) ?
                "El usuario ha sido creado con exito!" :
                "El usuario ha sido actualizado con exito!",
            icon: "success"
        });
        handlerCloseForm();
    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Está seguro que desea elimiar?",
            text: "Cuidado el usuario será eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "El usuario ha sido eliminado con exito.",
                    icon: "success"
                });
            }
        });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }
    
    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
    }
}