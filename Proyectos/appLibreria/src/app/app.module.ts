import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CabeceraComponent,
    ListadoLibrosComponent,
    EdicionLibroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
