let names = document.getElementById("nombre-input").value;
let date = document.getElementById("fecha-input").value;
let comments = document.getElementById("comentario-input").value;
let comentario1 = new comentario(names,date,comments);


// Agregar controlador de eventos al formulario
document.getElementById("comentario-form").addEventListener("submit", function (event) {
    // Evitar que la página se recargue al enviar el formulario
    event.preventDefault();
    // Llamar a la función imprimirComentario()
    comentario1.imprimirComentario();
   
});
/*
function imprimirComentario() {
    let nombreUsuario = document.getElementById("nombre-input").value;
    let fecha = document.getElementById("fecha-input").value;
    let comentario = document.getElementById("comentario-input").value;

    document.getElementById("nombre").innerHTML = nombreUsuario;
    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("texto").innerHTML = comentario;
}
*/
/*


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
        .catch(err => console.error(err));*/