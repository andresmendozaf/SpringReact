import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

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

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUser);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {
        // console.log(user);
        let type;
        if(user.id === 0){
            type = 'addUser'
        }else{
            type = 'updateUser'
        }
        dispatch({
            type,
            payload: user,
        })
    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
        setUserSelected({...user});
    }
    const handlerRemoveUser = (id) => {
        // console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })

    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        initialUserForm={initialUserForm}
                        handlerAddUser={handlerAddUser} 
                        userSelected={userSelected}/>
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                        : <UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}
                            users={users} />}
                </div>
            </div>
        </div>);
}