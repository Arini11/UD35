import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../../app.component';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {

  cliente: Cliente = {
    id: 0,
    nombre: "",
    cif: "",
    direccion: "",
    grupo: 0,
  };

  dades: Cliente[] = []

  saveClient(): void {
    this.dades.push(this.cliente)
    this.cliente = {
      id: 0,
      nombre: "",
      cif: "",
      direccion: "",
      grupo: 0,
    }
  }

}
