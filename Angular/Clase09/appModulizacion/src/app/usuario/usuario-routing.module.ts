import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { UsuarioResolve } from '../servicios/usuarios-resolver.service';

const routes: Routes = [
  {
    path: "", children: [
      {
        path: "", component: ListadoUsuariosComponent, resolve: {
          listado: UsuarioResolve
        }
      },
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
