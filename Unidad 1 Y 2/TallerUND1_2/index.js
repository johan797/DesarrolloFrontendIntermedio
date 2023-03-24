/*fetch("https://kitsu.io/api/edge")
    .then(res=>console.log(res))*/

    /*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res=>res.json())
    .then(response=>{
        console.log(response)
    })*/

    function imprimirComentario(){
        let nombreUsuario =document.getElementById("nombre-input");
        let fecha =document.getElementById("fecha-input");
        let comentario =document.getElementById("comentario-input");

        nombreUsuario.innerHTML=a;
        fecha.innerHTML=b;
        comentario.innerHTML=c;
    }


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9451269565msh9fca765a175b46fp1336aejsna3946d5f1a5e',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));