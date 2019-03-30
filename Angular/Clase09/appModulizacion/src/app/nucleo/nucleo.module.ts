import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NucleoRoutingModule } from './nucleo-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  exports: [
    CabeceraComponent
  ]
})
export class NucleoModule { }
