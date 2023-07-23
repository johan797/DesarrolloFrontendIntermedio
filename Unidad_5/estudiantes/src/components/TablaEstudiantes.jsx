import React, {useState, useEffect, useContext} from "react";
import AuthContext from "./AuthContext";

function TablaEstudiantes() {

    const {token} = useContext(AuthContext);
    const [estudiantes, setEstudiantes] = useState([]); //Listado de estudiantes

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    useEffect(() => {

        fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
        .then(response => response.json())
        .then(result => setEstudiantes(result.data))
        //.then(result => console.log(result))
        .catch(error => console.log('error', error));

    }, []);

    

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>LinkedIn</th>
                    <th>Github</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    estudiantes.map(estudiante => (
                        <tr key={estudiante.estudiante_id}>
                            <td>{estudiante.estudiante_id}</td>
                            <td>{estudiante.estudiante_nombres}</td>
                            <td>{estudiante.estudiante_apellidos}</td>
                            <td>{estudiante.estudiante_correo}</td>
                            <td>{estudiante.estudiante_celular}</td>
                            <td>{estudiante.estudiante_linkedin}</td>
                            <td>{estudiante.estudiante_github}</td>
                            <td>{estudiante.estudiante_estado}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );
}

export default TablaEstudiantes;