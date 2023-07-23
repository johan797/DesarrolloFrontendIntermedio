import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponenteComponent } from './my-componente/my-componente.component';
import { SaludoComponent } from './saludo/saludo.component';
import { MiModuloModule } from './mi-modulo/mi-modulo.module';

@NgModule({
  declarations: [
    AppComponent,
    MyComponenteComponent,
    SaludoComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    MiModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
