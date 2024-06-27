import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "../../features/auth/auhtSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());

        return ()=>{
            logout();
        }
    }, [logout])

    return <Navigate to="/login" />
}

export default Logout;
