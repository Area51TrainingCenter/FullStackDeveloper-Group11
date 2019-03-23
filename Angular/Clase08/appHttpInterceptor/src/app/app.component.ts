import { AuthService } from './servicios/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Usuario } from './interfaces/usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registro: FormGroup

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registro = new FormGroup({
      nombreCompleto: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
      nombreEmpresa: new FormControl("Mi Empresa")
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

}
