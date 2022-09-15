import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../app.component';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent {
  @Input() dades: any;
}
