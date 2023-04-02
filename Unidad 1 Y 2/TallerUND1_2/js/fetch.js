const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9451269565msh9fca765a175b46fp1336aejsna3946d5f1a5e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const listaGeneros = document.getElementById('genero');
const divP = document.getElementById('peliculas');
let genero;
listaGeneros.addEventListener("change", function (event) {
    genero = event.target.value;
    console.log(genero);
    if (divP) {
        LimpiarPeliculas();
    }
    MostrarGeneros(genero);
});

function LimpiarPeliculas(params) {
    while (divP.firstChild) {
        divP.removeChild(divP.firstChild);
    }
}

function MostrarGeneros(genero) {
    fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genero}&list=most_pop_movies&limit=16`, options)
        .then(response => response.json())
        .then(response => {
            const data = response;
            data.results.forEach(result => {               

                if (result.primaryImage && result.primaryImage.url) {
                    const image = document.createElement("img");
                    image.src = result.primaryImage.url;
                    image.alt = result.titleText.text;
                    image.style.width = "150px"; // establecer ancho de imagen a 100px
                    image.style.height = "200px";
                    divP.appendChild(image);
                    const anio = document.createElement("p");
                    anio.innerHTML = result.releaseYear.year;
                    divP.appendChild(anio);
                }
            })
        })
        .catch(err => console.error(err));
}
