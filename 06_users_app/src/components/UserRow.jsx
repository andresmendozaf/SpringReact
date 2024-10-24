export const UserRow = ({ handlerRemoveUser, handlerUserSelectedForm, id, username, email, password }) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btm-sm"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email,
                    }
                    )}
                >
                    update
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btm-sm"
                    onClick={() => handlerRemoveUser(id)}
                >
                    remove
                </button>
            </td>
        </tr>
    );
}