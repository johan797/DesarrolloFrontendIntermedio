const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9451269565msh9fca765a175b46fp1336aejsna3946d5f1a5e',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};
function generos() {

    fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', options)
        .then(response => response.json())
        .then(response => {
            let generos = response.results;
            //console.log(typeof(generos));
            const div = document.getElementById('generos');
            const ul = document.createElement('ul');
            for (let i = 1; i < generos.length; i++) {
                const a = document.createElement('a');                
                a.href = '#'; // Agrega un enlace "#" por defecto
                a.innerText = generos[i];
                ul.appendChild(a);
            }
            div.appendChild(ul);
        })
        .catch(err => console.error(err));
}
generos();

const listaGeneros = document.getElementById('generos');
listaGeneros.addEventListener("click", function(event) {    
    let genero = event.target.innerText;    
    console.log(typeof(genero));
    MostrarGeneros(genero);
});

function MostrarGeneros(genero) {
    fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genero}&list=most_pop_movies&limit=16&page=2`, options)
    .then(response => response.json())
    .then(response => {
        const data = response;
        data.results.forEach(result => {
            const divP = document.getElementById('peliculas');
            if (result.primaryImage && result.primaryImage.url) {
                const image = document.createElement("img");
                image.src = result.primaryImage.url;
                image.alt = result.titleText.text;
                image.style.width = "200px"; // establecer ancho de imagen a 100px
                image.style.height = "300px";
                divP.appendChild(image);
                const anio = document.createElement("p");
                anio.innerHTML=result.releaseYear.year;
                divP.appendChild(anio);
            }    
        })
    })
    .catch(err => console.error(err));
    

}
