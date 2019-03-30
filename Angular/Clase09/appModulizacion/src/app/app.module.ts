import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from "@angular/router"
import { NucleoModule } from './nucleo/nucleo.module';

const rutas: Routes = [
  { path: "clientes", loadChildren: "./cliente/cliente.module#ClienteModule" },
  { path: "usuarios", loadChildren: "./usuario/usuario.module#UsuarioModule" },
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
