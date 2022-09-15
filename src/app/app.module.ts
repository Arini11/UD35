import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './clientes.service';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent
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
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
