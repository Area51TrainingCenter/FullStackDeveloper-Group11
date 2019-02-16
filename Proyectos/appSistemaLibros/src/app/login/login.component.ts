import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.autenticacionService.login()
    this.router.navigate(["libros"])
  }

}
