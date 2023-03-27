class comentario {
    
    constructor(id,nombre, fecha, comentarios) {
        //validacion de argumentos
        this.id = id;
        this.usuario = nombre;
        this.fecha = fecha;
        this.texto = comentarios;

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
    //metodos de clase
    agregarComentario() {

        // Crea un nuevo elemento div para el comentario
        let comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");
        comentarioDiv.id='com'+this.id;
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

        let borrarElement = document.createElement("button");        
        borrarElement.classList.add("borrar");               
        borrarElement.innerHTML = 'Borrar';
        borrarElement.id=this.id;
        
        
        // Agrega los nuevos elementos al comentarioDiv
        comentarioDiv.appendChild(nombreElement);
        comentarioDiv.appendChild(fechaElement);
        comentarioDiv.appendChild(textoElement);
        comentarioDiv.appendChild(editarElement);
        comentarioDiv.appendChild(borrarElement);
        // Agrega el comentarioDiv al contenedor de comentarios
        document.getElementById("comentarios").appendChild(comentarioDiv);

    }

    
/*
    borrarComentario(id) {
        // Busca el comentario correspondiente al id
    let comentarioDiv = document.getElementById(`com${id}`);
    if (!comentarioDiv) {
        console.error(`No se encontró el comentario con id ${id}`);
        return;
    }
    comentarioDiv.remove();
    console.log(`Comentario con id ${id} eliminado.`);
    }*/
}