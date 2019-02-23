import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit {

  @Input() nombre: string
  @Input() indice: number
  @Input() archivo: File

  @Output() onBorrar = new EventEmitter<number>()

  imagen: any

  constructor() { }

  ngOnInit() {
    const fr = new FileReader()
    fr.onloadend = leido => {
      this.imagen = (<FileReader>leido.target).result
    }

    fr.readAsDataURL(this.archivo)
  }

  borrar(){
    this.onBorrar.emit(this.indice)
  }

}
