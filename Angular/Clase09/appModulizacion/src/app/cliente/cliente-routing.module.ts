import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "", component: ListadoClientesComponent },
      { path: "nuevo", component: NuevoClienteComponent },
      { path: "edicion", component: EdicionClienteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
