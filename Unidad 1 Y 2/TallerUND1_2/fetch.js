const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9451269565msh9fca765a175b46fp1336aejsna3946d5f1a5e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
    .then(response => response.json())
    .then(response => {
        /*// Obtener el elemento donde se mostrará la respuesta
        const respuestaElement = document.getElementById('respuesta-fetch');
        // Asignar el valor de la respuesta al elemento
        respuestaElement.innerHTML = JSON.stringify(response, null, 3);*/

        const data = response;

        const table = document.getElementById("grid");
        const tbody = table.querySelector("tbody");

        data.results.forEach(result => {
            const row = tbody.insertRow();

            const idCell = row.insertCell();
            idCell.textContent = result.id;

            const imageCell = row.insertCell();
            if (result.primaryImage && result.primaryImage.url) {
                const image = document.createElement("img");
                image.src = result.primaryImage.url;
                image.alt = result.titleText.text;
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