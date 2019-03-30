import { ClientesResolve } from '../../servicios/clientes-resolve.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  constructor(private clienteResolve: ClientesResolve) { }

  ngOnInit() {
    console.log(this.clienteResolve.dataClientes)
    console.log(this.clienteResolve.dataRoles)
  }

}
