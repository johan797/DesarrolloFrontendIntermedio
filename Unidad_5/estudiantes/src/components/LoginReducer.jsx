import React, { useReducer, useContext } from "react";
import AuthContext from "./AuthContext";
import "../assets/css/Login.css";
import logo from "../assets/react.svg";

const initialState = {
  identificacion: "",
  correo: "",
  cargando: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IDENTIFICACION":
      return { ...state, identificacion: action.payload };
    case "SET_CORREO":
      return { ...state, correo: action.payload };
    case "SET_CARGANDO":
      return { ...state, cargando: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const auth = useContext(AuthContext);

  const enviarForm = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_CARGANDO", payload: true });

    try {
      await auth.login(state.identificacion, state.correo);
    } catch {
      dispatch({ type: "SET_CARGANDO", payload: false });
      alert("Error al iniciar sesión");
    } finally {
      dispatch({ type: "SET_CARGANDO", payload: false });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={enviarForm} className="login-form">
        <img src={logo} alt="React" />
        <input
          type="number"
          placeholder="Ingrese su Identificación"
          value={state.identificacion}
          onChange={(e) =>
            dispatch({ type: "SET_IDENTIFICACION", payload: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Ingrese su Correo Electrónico"
          value={state.correo}
          onChange={(e) =>
            dispatch({ type: "SET_CORREO", payload: e.target.value })
          }
        />
        <button type="submit" disabled={state.cargando}>
          {state.cargando ? "Validando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;