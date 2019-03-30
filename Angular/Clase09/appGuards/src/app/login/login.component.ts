import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rutaapi: string

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.rutaapi = environment.rutaapi
  }

  loguearse() {
    this.autenticacionService.login()
  }

}
