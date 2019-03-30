
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';
import { AutenticacionGuard } from './autenticacion.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "usuarios", canActivateChild: [AutenticacionGuard], component: ListadoComponent, children: [
      //{ path: "", component: ListadoComponent },
      { path: "nuevo", component: NuevoComponent },
      { path: "edicion", component: EdicionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
