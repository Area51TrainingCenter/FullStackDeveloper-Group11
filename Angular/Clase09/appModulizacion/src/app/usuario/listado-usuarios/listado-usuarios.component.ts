import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore deserunt dolore fugit temporibus a ipsa ipsam! Numquam vel id doloremque facere, commodi voluptas harum dolores, ex error molestias autem!"

  constructor() { }

  ngOnInit() {
  }

}
