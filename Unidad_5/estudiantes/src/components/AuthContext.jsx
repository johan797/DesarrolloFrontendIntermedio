import { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if(token && user){
            setToken(token);
            setUser(JSON.parse(user));
        }
    }, []);
        
    const api = useApi({ apiName: "getToken" });
    const login = async (identificacion, correo) => {                
        const data = await api.fetchData({identificacion, correo});
        setToken(data.token);
        localStorage.setItem("token", token);
        setUser({identificacion, correo});
        localStorage.setItem("user", JSON.stringify({identificacion, correo}));

    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        setToken(null);
        localStorage.removeItem("token");
    };

    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );


};

export default AuthContext