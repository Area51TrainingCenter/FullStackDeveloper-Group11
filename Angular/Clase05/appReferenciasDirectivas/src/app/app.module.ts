import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { MiDirectiva } from './midirectiva.directive';
import { SubirArchivoDirective } from './subir-archivo.directive';

@NgModule({
	declarations: [
		AppComponent,
		ModelComponent,
		MiDirectiva,
		SubirArchivoDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
