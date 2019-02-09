import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReductorPipe } from './reductor.pipe';
import { ReductorPalabras } from './reductor-palabras.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ReductorPipe,
		ReductorPalabras
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
