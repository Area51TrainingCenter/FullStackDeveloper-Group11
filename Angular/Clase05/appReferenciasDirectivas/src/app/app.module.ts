import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { MiDirectiva } from './midirectiva.directive';

@NgModule({
	declarations: [
		AppComponent,
		ModelComponent,
		MiDirectiva
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
