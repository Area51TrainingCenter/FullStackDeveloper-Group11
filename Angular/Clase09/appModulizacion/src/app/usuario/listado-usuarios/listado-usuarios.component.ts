
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore deserunt dolore fugit temporibus a ipsa ipsam! Numquam vel id doloremque facere, commodi voluptas harum dolores, ex error molestias autem!"

  constructor(private activatedRoute: ActivatedRoute) { }

  usuarios: Usuario[] = []

  ngOnInit() {
    this.usuarios = this.activatedRoute.snapshot.data["listado"]
  }

}
