import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { LibrosService } from '../servicios/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  cantidadLibros: number = 0

  constructor(private autenticacionService: AutenticacionService, private librosService: LibrosService, private router: Router) { }

  ngOnInit() {
    this.cantidadLibros = this.librosService.obtenerCantidad()

    this.librosService.onActualizacionCantidad
      .subscribe(
        (cantidad: number) => this.cantidadLibros = cantidad
      )
  }

  logout() {
    this.autenticacionService.logout()
    this.router.navigate([""])
  }

}
