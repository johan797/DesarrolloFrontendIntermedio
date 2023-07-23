import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PerfilComponent } from './perfil/perfil.component';

//modulos material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ResetPasswordComponent,
    PerfilComponent
  ],
  imports: [

    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule

  ],
  exports: [
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ResetPasswordComponent
  ]
})
export class UsuariosModule { }
