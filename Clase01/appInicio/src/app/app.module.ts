import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPruebaComponent } from './miprueba.component';
import { ErrorComponent } from './error.component';
import { NotificacionComponent } from './notificacion.component';

@NgModule({
	declarations: [
		AppComponent, MiPruebaComponent,
		ErrorComponent,
		NotificacionComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
