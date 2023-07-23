
import React, {useState, useEffect, useContext} from "react";

function TablaEstudiantes() {
    const [estudiantes, setEstudiantes] = useState([]); //Listado de estudiantes

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjQwMTYzMiwiY29ycmVvIjoiam9oYW5oZXJyZXJhNzk3QGdtYWlsLmNvbSIsImlhdCI6MTY4ODA1NjcwNiwiZXhwIjoxNjg4NjYxNTA2fQ.tdMznwiee_IaFemYQcxEegN15dI7vciEZQiqUxgvNfo}`);

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
                
            </tbody>
        </table>

    );
}

export default TablaEstudiantes;