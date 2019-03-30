import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "", component: ListadoUsuariosComponent },
      { path: "nuevo", component: NuevoUsuarioComponent },
      { path: "edicion", component: EdicionUsuarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
