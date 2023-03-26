class comentario {
    constructor(nombre, fecha, comentarios) {
        //validacion de argumentos
        this.nombre = nombre;
        this.fecha = fecha;
        this.comentarios = comentarios;
    }
    //metodos de clase
    imprimirComentario() {
        document.getElementById("nombre").innerHTML = this.nombre;
        document.getElementById("fecha").innerHTML = this.fecha;
        document.getElementById("texto").innerHTML = this.comentarios;
    }
}
