import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPruebaComponent } from './miprueba.component';
import { ErrorComponent } from './error.component';
import { NotificacionComponent } from './notificacion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
	declarations: [
		AppComponent, MiPruebaComponent,
		ErrorComponent,
		NotificacionComponent,
		UsuarioComponent,
		PersonasComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
