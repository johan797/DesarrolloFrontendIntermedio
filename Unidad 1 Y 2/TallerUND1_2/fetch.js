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
        // Obtener el elemento donde se mostrará la respuesta
        const respuestaElement = document.getElementById('respuesta-fetch');
        // Asignar el valor de la respuesta al elemento
        respuestaElement.innerHTML = JSON.stringify(response);
    })
    .catch(err => console.error(err));