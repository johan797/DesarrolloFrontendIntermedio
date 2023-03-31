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
    if (target.classList.contains("borrar")) {
        let id = 'com' + target.id;
        console.log(id);
        let comentarios = new comentario(id, null, null, null);
        comentarios.borrarComentario(id);
    } else if (target.classList.contains("editar")) {
        let id = 'co' + target.id;
        console.log(id);
        let comentarios = new comentario(id, null, null, null);
        comentarios.editarComentario(id);
    }
});
