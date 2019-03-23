import { CursosService } from './servicios/cursos.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.listar()
  }
}
