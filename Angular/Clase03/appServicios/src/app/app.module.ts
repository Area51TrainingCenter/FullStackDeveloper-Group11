import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './listado/listado.component';
import { Usuario } from './usuario.class';
import { LogService } from './log.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CabeceraComponent,
		ListadoComponent
	],
	imports: [
		BrowserModule
	],
	providers: [LogService],
	bootstrap: [AppComponent]
})
export class AppModule { }
