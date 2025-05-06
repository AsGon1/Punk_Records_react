import { Children, createContext, useState } from "react";

const AuthContext = createContext({
    userData: {},
    onLogin : () => {},
    onLogout: () => {}
})

const AuthProvider = () => {
    const [userData, setUserData] = useState(null);

    const handleLogin = async (email,password) => {
        const result = await login(email,password);
        if(result.error){
          removeToken();
          return result.error;
        }else{
          console.log("login",result)
          setUserData(result.user);
          saveToken(result.token);
          setRoute("home");
          return null;
        }
    }

    const handleLogout = ()=>{
        removeToken();
        onRouteChange("home");
    }

    return (
        <AuthContext value = {{userData:userData, onLogin:handleLogin, onLogout: handleLogout}}>
            {Children}
        </AuthContext>
    )
}

export {
    AuthContext,
    AuthProvider
}