import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import "../assets/css/LogoutButton.css";

const LogoutButton = () => {
    const {logout} = useContext(AuthContext);

    return (
        <button onClick={logout}>Cerrar Sesión</button>
    );
}

export default LogoutButton;