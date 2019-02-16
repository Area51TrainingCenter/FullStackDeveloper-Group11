import { Component, OnInit, Input } from '@angular/core';
import { ILibro } from '../modelos/libro.interface';
import { LibrosService } from '../servicios/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() libro: ILibro
  @Input() indice: number

  constructor(private librosService: LibrosService, private router: Router) { }

  ngOnInit() {
  }

  eliminar() {
    if (confirm("Quiere eliminar?")) {
      this.librosService.eliminar(this.indice)
    }
  }

  editar() {
    this.router.navigate(["/libros", "editar", this.indice])
  }

}
