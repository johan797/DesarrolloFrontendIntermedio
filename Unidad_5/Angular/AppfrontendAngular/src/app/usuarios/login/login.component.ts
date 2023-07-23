import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensaje: string ;

  constructor(){
    this.mensaje = "BIENVENIDO";
  }

  Login(){
    alert(this.mensaje);
  }
}


