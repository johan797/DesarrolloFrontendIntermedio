import React, {useState, useContext} from "react";
import AuthContext from "./AuthContext";
import "../assets/css/Login.css";
import logo from "../assets/react.svg";

const Login = () => {

    const [cargando, setCargando] = useState(false); 
    const [identificacion, setIdentificacion] = useState("");
    const [correo, setCorreo] = useState("");
    const auth = useContext(AuthContext);

    const enviarForm = async (e) => {
        e.preventDefault();
        setCargando(true);
        
        try{
            await auth.login(identificacion, correo);
        }catch(error){
            setCargando(false);
            console.error('Error al iniciar sesión', error);
            alert("Error al iniciar sesión");
        }finally{
            setCargando(false);
        }
        
    };

    return (

        <div className="login-container">
            <form onSubmit={enviarForm} className="login-form">
                <img src={logo} alt="React" />
                <input 
                    type="number"
                    placeholder="Ingrese su Identificación"
                    value={identificacion}                    
                    onChange={(e) => setIdentificacion(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="Ingrese su Correo Electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <button type="submit" disabled={cargando}>
                    { cargando ? "Validando..." : "Iniciar Sesión"}
                </button>
            </form>
        </div>

    );

};

export default Login;