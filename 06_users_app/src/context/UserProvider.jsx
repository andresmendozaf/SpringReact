import { UserContext } from "./UserContext"
import { useUsers } from "../hooks/useUsers"

export const UserProvider = ({ children }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <UserContext.Provider value={
            {
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
        }>
            {children}
        </UserContext.Provider>
    )
}