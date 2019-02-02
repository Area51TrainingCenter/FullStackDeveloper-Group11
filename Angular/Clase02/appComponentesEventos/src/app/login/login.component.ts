import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	@Output() onIngresar = new EventEmitter<boolean>()

	constructor() { }

	ngOnInit() {
	}

	loguearse() {
		this.onIngresar.emit(true)
		//console.log("Usuario logueado")
	}

}
