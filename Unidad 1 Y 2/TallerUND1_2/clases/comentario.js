class comentario {

    constructor(id, nombre, fecha, comentarios) {
        //validacion de argumentos
        this.id = id;
        this.usuario = nombre;
        this.fecha = fecha;
        this.texto = comentarios;
    }
    //metodos de clase
    agregarComentario() {

        // Crea un nuevo elemento div para el comentario
        let comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");
        comentarioDiv.id = 'com' + this.id;
        // Crea nuevos elementos HTML para mostrar el nombre, fecha y comentario
        let nombreElement = document.createElement("span");
        nombreElement.classList.add("nombre");
        nombreElement.textContent = this.usuario;

        let fechaElement = document.createElement("p");
        fechaElement.classList.add("fecha");
        fechaElement.textContent = this.fecha;

        let textoElement = document.createElement("p");
        textoElement.classList.add("texto");
        textoElement.textContent = this.texto;

        // Crea nuevos botones para editar y borrar el comentario
        let editarElement = document.createElement("button");
        editarElement.classList.add("editar");
        editarElement.innerHTML = 'Editar';
        editarElement.id = 'm'+this.id;

        let borrarElement = document.createElement("button");
        borrarElement.classList.add("borrar");
        borrarElement.innerHTML = 'Borrar';
        borrarElement.id = this.id;


        // Agrega los nuevos elementos al comentarioDiv
        comentarioDiv.appendChild(nombreElement);
        comentarioDiv.appendChild(fechaElement);
        comentarioDiv.appendChild(textoElement);
        comentarioDiv.appendChild(editarElement);
        comentarioDiv.appendChild(borrarElement);
        // Agrega el comentarioDiv al contenedor de comentarios
        document.getElementById("comentarios").appendChild(comentarioDiv);

    }

    editarComentario(id) {
        // Busca el comentario correspondiente al id
        let comentarioDiv = document.querySelector(`.comentario[id='${id}']`);
        if (!comentarioDiv) {
          console.error(`Comentario no encontrado para id ${id}`);
          return;
        }
        // Pide al usuario que ingrese el nuevo texto del comentario
        let nuevoTexto = prompt("Ingrese el nuevo texto del comentario:");
        if (!nuevoTexto) {
          console.error("Texto de comentario vacío o cancelado");
          return;
        }
        // Actualiza el texto del comentario
        comentarioDiv.querySelector(".texto").textContent = nuevoTexto;
        console.log(`Comentario ${id} editado`);
      }

    borrarComentario(id) {
        // Busca el comentario correspondiente al id
        let comentarioDiv = document.querySelector(`.comentario[id='${id}']`);
        if (!comentarioDiv) {
            console.error(`Comentario no encontrado para id ${id}`);
            return;
        }
        // Elimina el comentario
        comentarioDiv.remove();
        console.log(`Comentario ${id} eliminado`);
    }

}