import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    ListadoClientesComponent,
    NuevoClienteComponent,
    EdicionClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CompartidoModule
  ]
})
export class ClienteModule { }
