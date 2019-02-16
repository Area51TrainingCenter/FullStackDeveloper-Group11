import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../servicios/libros.service';
import { ILibro } from '../modelos/libro.interface';

@Component({
  selector: 'app-edicion-libro',
  templateUrl: './edicion-libro.component.html',
  styleUrls: ['./edicion-libro.component.css']
})
export class EdicionLibroComponent implements OnInit {
  libro: ILibro
  id: number

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private librosService: LibrosService) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id")

    this.libro = this.librosService.detallar(this.id)
  }

  capturarTitulo(titulo: string) {
    this.libro.titulo = titulo
  }

  cancelar() {
    this.router.navigate(["/libros"])
  }

  grabar() {
    this.librosService.grabar(this.id, this.libro)
    this.router.navigate(["/libros"])
  }

}
