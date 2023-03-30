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
    fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genero}&list=most_pop_movies&limit=15&year=2020&page=2`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
