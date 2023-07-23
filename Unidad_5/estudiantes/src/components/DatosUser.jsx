import React, {useContext} from "react";
import AuthContext from "./AuthContext";

const DatosUser = () => {
    
    const {user, token} = useContext(AuthContext);

    const auth = useContext(AuthContext);
    
    return (
        <div>
            <h1>Datos del Usuario</h1>
            <ul>
                <li>Identificación: { user.identificacion }</li>
                <li>Correo: { user.correo } </li>
                <li>Token: { token } </li>
            </ul>

            <ul>
                <li>Identificación: { auth.user.identificacion }</li>
                <li>Email: { auth.user.correo }</li>
                <li>Token: { auth.token }</li>
            </ul>
        </div>

    );
};

export default DatosUser;