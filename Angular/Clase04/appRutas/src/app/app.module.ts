import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';

const rutas: Array<Route> = [
  { path: "", component: LoginComponent },
  {
    path: "home", children: [
      { path: "", component: HomeComponent },
      { path: "perfil", component: PerfilComponent }
    ]
  },
  {
    path: "cursos", children: [
      { path: "", component: ListadoComponent },
      { path: "edicion/:id", component: EdicionComponent }
    ]
  },
  //{ path: "**", component: NoEncontradoComponent }
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoEncontradoComponent,
    PerfilComponent,
    ListadoComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
