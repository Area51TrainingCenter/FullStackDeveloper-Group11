import { Guardar } from '../guardar.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, Guardar {
  grupo: FormGroup

  dataOriginal = { nombre: "Sergio" }

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(this.dataOriginal.nombre)
    })
  }

  canDeactivateGuardar(): boolean {
    const dataForm = this.grupo.getRawValue()

    return dataForm.nombre === this.dataOriginal.nombre ? true : false
  }

}
