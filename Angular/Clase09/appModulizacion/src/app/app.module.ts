import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

import { RouterModule, Routes } from "@angular/router"

const rutas: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "clientes", children: [
      { path: "", component: ListadoClientesComponent },
      { path: "nuevo", component: NuevoClienteComponent },
      { path: "edicion", component: EdicionClienteComponent }
    ]
  },
  {
    path: "usuarios", children: [
      { path: "", component: ListadoUsuariosComponent },
      { path: "nuevo", component: NuevoUsuarioComponent },
      { path: "edicion", component: EdicionUsuarioComponent }
    ]
  },
  { path: "**", redirectTo: "" }

]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    ListadoUsuariosComponent,
    NuevoUsuarioComponent,
    EdicionUsuarioComponent,
    ListadoClientesComponent,
    EdicionClienteComponent,
    NuevoClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
