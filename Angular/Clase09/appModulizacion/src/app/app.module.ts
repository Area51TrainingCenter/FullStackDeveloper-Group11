import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes, PreloadAllModules } from "@angular/router"
import { NucleoModule } from './nucleo/nucleo.module';
import { CargaGuard } from './servicios/carga.guard';

const rutas: Routes = [
  { path: "clientes", loadChildren: "./cliente/cliente.module#ClienteModule", canActivate: [CargaGuard] },
  { path: "usuarios", loadChildren: "./usuario/usuario.module#UsuarioModule", canLoad: [CargaGuard] },
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules }),
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
