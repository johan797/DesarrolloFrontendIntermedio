function fechahoy() {
    var today = new Date(); 
    var day = today.getDate().toString().padStart(2, "0");     
    var month = (today.getMonth() + 1).toString().padStart(2, "0");     
    var year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

let id = 1;

document.getElementById("comentario-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let names = document.getElementById("nombre-input").value;    
    let date = fechahoy();
    let comments = document.getElementById("comentario-input").value;
    let ids = id.toString();
    let comentario1 = new comentario(ids, names, date, comments);
    comentario1.agregarComentario(); 
    id += 1;
});


document.getElementById("comentarios").addEventListener("click", function (event) {
    let target = event.target;
        let id = 'com'+target.id;
        console.log(id);
        let comentarios = new comentario(id, null, null, null);
        comentarios.borrarComentario(id);    
});
/*
document.getElementById("comentarios").addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("editar")) {
        let id = target.dataset.num;
        let comentarios = new comentario(id, null, null, null);
        comentarios.editarComentario(id);
    } else if (target.classList.contains("borrar")) {
        let id = target.dataset.num;
        let comentarios = new comentario(id, null, null, null);
        comentarios.borrarComentario(`com${id}`);
    }
});
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