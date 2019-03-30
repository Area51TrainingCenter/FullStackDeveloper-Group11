import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ListadoUsuariosComponent,
    EdicionUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CompartidoModule
  ]
})
export class UsuarioModule { }
