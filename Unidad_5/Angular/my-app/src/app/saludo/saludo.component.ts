import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
mensaje: string;
contador: number;
@Input() texto: string;


constructor(){
  this.mensaje= "hola";
  this.contador = 0;
  this.texto = "";
}
saludar(){
  alert(this.mensaje);
}

cambiar(){
  this.mensaje= "adios mundo";
}

reiniciar(){
  this.mensaje = "hola mundo";
}

incrementar(){
  this.contador++;
}

decrementar(){
  this.contador--;
}

}
