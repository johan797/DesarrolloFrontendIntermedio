const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9451269565msh9fca765a175b46fp1336aejsna3946d5f1a5e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

//fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0101702%2Ctt0101856%2Ctt0101857%2Ctt0101703%2Ctt0101858%2Ctt0001859%2Ctt0001704%2Ctt0001861%2Ctt0001862%2Ctt0001706%2Ctt0001863%2Ctt0001864%2Ctt0001706%2Ctt0001866%2Ctt0001870', options)
 
// Convertir la respuesta de la solicitud a un objeto JSON
    .then(response => response.json())
    .then(response => {
        /*// Obtener el elemento donde se mostrará la respuesta
        const respuestaElement = document.getElementById('respuesta-fetch');
        // Asignar el valor de la respuesta al elemento
        respuestaElement.innerHTML = JSON.stringify(response, null, 3);*/

        // Obtener los datos de la respuesta y asignarlos a una variable llamada "data"
        const data = response;
        // Obtener la tabla y la sección de cuerpo de la tabla
        const table = document.getElementById("grid");
        const tbody = table.querySelector("tbody");

        /*el método forEach() para iterar sobre los 
        resultados del JSON y agregar cada fila correspondiente a la tabla. 
        Para cada resultado, se crean las celdas correspondientes en la fila y
         se asignan los valores*/
        data.results.forEach(result => {
            // Crear una nueva fila en la sección de cuerpo de la tabla
            const row = tbody.insertRow();
            // Agregar una celda para el ID del resultado
            const idCell = row.insertCell();
            idCell.textContent = result.id;

            const imageCell = row.insertCell();
            if (result.primaryImage && result.primaryImage.url) {
                const image = document.createElement("img");
                image.src = result.primaryImage.url;
                image.alt = result.titleText.text;
                image.style.width = "400px"; // establecer ancho de imagen a 100px
                image.style.height = "400px";
                imageCell.appendChild(image);
            }

            const typeCell = row.insertCell();
            typeCell.textContent = result.titleType.text;

            const titleCell = row.insertCell();
            titleCell.textContent = result.titleText.text;

            const yearCell = row.insertCell();
            yearCell.textContent = result.releaseYear.year;

            const dateCell = row.insertCell();
            dateCell.textContent = `${result.releaseDate.day}/${result.releaseDate.month}/${result.releaseDate.year}`;
        });
    })
    .catch(err => console.error(err));