import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponenteAsociadoComponent } from './mi-componente-asociado/mi-componente-asociado.component';



@NgModule({
  declarations: [
    MiComponenteAsociadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiComponenteAsociadoComponent
  ]
})
export class MiModuloModule { }
