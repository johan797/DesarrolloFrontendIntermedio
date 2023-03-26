class comentario {
    constructor(nombre, fecha, comentarios) {
        //validacion de argumentos
        this. usuario = nombre;
        this.fecha = fecha;
        this.texto = comentarios;
    }
    //metodos de clase
    agregarComentario() {
        document.getElementById("nombre").innerHTML = this.usuario;
        document.getElementById("fecha").innerHTML = this.fecha;
        document.getElementById("texto").innerHTML = this.texto;
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

