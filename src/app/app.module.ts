import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AltaClienteComponent } from './components-ex1/alta-cliente/alta-cliente.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoClientesComponent } from './components-ex1/listado-clientes/listado-clientes.component';
import { FormularioComponent } from './components-ex2/formulario/formulario.component';
import { MostrarDatosComponent } from './components-ex2/mostrar-datos/mostrar-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent,
    FormularioComponent,
    MostrarDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
