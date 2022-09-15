import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formData:any = {
    nombre: "",
    email: "",
    mensaje: "",
    solucion: 0
  }

  dades: any

  enviar(){
    this.dades = this.formData
    this.formData = {
      nombre: "",
      email: "",
      mensaje: "",
      solucion: 0
    }
  }

}
