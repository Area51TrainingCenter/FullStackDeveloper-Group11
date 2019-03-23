import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Usuario } from './interfaces/usuario';
import { UsuarioService } from './servicios/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registro: FormGroup
  login: FormGroup

  usuarios: Usuario[] = []

  constructor(private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.registro = new FormGroup({
      nombreCompleto: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
      nombreEmpresa: new FormControl("Mi Empresa")
    })

    this.login = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  registrar() {
    const usuario: Usuario = this.registro.getRawValue()
    this.authService.registro(usuario)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.registro.reset()
        }
      )
  }

  loguear() {
    const usuario: Usuario = this.login.getRawValue()
    this.authService.login(usuario)
      .subscribe(
        (data: any) => {
          const accessToken = data.resultado.accessToken
          sessionStorage.setItem("accessToken", accessToken)
          this.login.reset()
        }
      )
  }

  listarUsuarios() {
    this.usuarioService.listar()
      .subscribe(
        (data: any) => this.usuarios = data.results
      )
  }

}
