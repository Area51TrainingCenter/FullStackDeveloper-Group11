import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSubirArchivo]'
})
export class SubirArchivoDirective {

  @Output("onHover") onHover = new EventEmitter<boolean>()
  @Output("onSeleccionados") onSeleccionados = new EventEmitter<FileList>()

  constructor() { }

  @HostListener("dragover", ["$event"]) arrastrando($event) {
    $event.preventDefault()
    this.onHover.emit(true)
  }

  @HostListener("dragleave", ["$event"]) saliendo($event) {
    $event.preventDefault()
    this.onHover.emit(false)
  }

  @HostListener("drop", ["$event"]) soltando($event) {
    $event.preventDefault()
    const lista: FileList = $event.dataTransfer.files
    this.onSeleccionados.emit($event.dataTransfer.files)
  }



}
