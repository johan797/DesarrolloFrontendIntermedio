class comentario {
    
    constructor(nombre, fecha, comentarios) {
        //validacion de argumentos

        this.usuario = nombre;
        this.fecha = fecha;
        this.texto = comentarios;

    }
    //metodos de clase
    agregarComentario() {
        /*
        document.getElementById("nombre").innerHTML = this.usuario;
        document.getElementById("fecha").innerHTML = this.fecha;
        document.getElementById("texto").innerHTML = this.texto;
*/
        // Crea un nuevo elemento div para el comentario
        let comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

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

        let editarElement = document.createElement("button");        
        editarElement.classList.add("editar");
        editarElement.innerHTML = 'editar';

        let borrarElement = document.createElement("button");        
        borrarElement.classList.add("borrar");
        borrarElement.innerHTML = 'Borrar';
        
        // Agrega los nuevos elementos al comentarioDiv
        comentarioDiv.appendChild(nombreElement);
        comentarioDiv.appendChild(fechaElement);
        comentarioDiv.appendChild(textoElement);
        comentarioDiv.appendChild(editarElement);
        comentarioDiv.appendChild(borrarElement);

        // Agrega el comentarioDiv al contenedor de comentarios
        document.getElementById("comentarios").appendChild(comentarioDiv);
    }
    ocultarMostrarElemento() {
        let elemento1 = document.getElementById("editar");
        let elemento2 = document.getElementById("borrar");

        if (elemento1.style.display == "none" & elemento2.style.display == "none") {
            elemento1.style.display = "block";
            elemento2.style.display = "block";
        } else {
            elemento1.style.display = "none";
            elemento2.style.display = "none";
        }
    }
    editarComentario(usuario, fecha, texto) {
        this.usuario = usuario;
        this.fecha = fecha;
        this.texto = texto;
        this.agregarComentario();
    }

    eliminarComentario() {
        this.usuario = "";
        this.fecha = "";
        this.texto = "";
        this.agregarComentario();
    }
}

