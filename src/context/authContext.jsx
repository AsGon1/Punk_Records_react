import { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { saveToken, removeToken } from "../utils/localstorage";
import {login, logout} from "../utils/backend/auth";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => { },
    onLogout: () => { }
})

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            removeToken();
            return result.error;
        } else {
            result.password = "";
            setUserData(result.result);
            saveToken(result.token);
            navigate("/home")
            return null;
        }
    }

    const handleLogout = () => {
        removeToken();
        setUserData(null);
        navigate("/home");
    }

    return (
        <AuthContext value={{userData:userData,onLogin:handleLogin,onLogout:handleLogout}}>
            {children}
        </AuthContext>
    )
}

export {
    AuthContext,
    AuthProvider
}