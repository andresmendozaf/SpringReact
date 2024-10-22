import { useEffect, useState } from "react";

export const UserForm = ({ handlerAddUser, userSelected, initialUserForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            // password: '',
        })
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }
    const onSubmit = (event) => {
        event.preventDefault(userForm);
        if (!username || !password || !email) {
            alert('Debe completar los campos del formulario!!!');
            return;
        }
        //console.log(userForm);

        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            <input className="form-control my-3 w75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />
            <input className="form-control my-3 w75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input
                type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0? 'Editar' : 'Crear'}
            </button>
        </form>
    );
}