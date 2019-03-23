import { CursosService } from './servicios/cursos.service';
import { UsersService } from './servicios/users.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listadoCursos: Object[] = []
  listadoUsuarios: Object[] = []

  constructor(private cursosService: CursosService, private usersService: UsersService) { }

  ngOnInit() {
    this.cursosService.listar()
      .subscribe(
        (data: any) => this.listadoCursos = data
      )

    this.usersService.listarUsuarios()
      .subscribe(
        (data: any) => this.listadoUsuarios = data
      )
  }
}
