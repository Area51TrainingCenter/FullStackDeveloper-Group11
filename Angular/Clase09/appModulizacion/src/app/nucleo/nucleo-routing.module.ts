
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from './login/login.component';

const rutas: Routes = [
  { path: "", component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ]
})
export class NucleoRoutingModule { }
