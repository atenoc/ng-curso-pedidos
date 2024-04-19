import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductoService } from './services/producto.service';
import { PedidoService } from './services/pedido.service';
import { PruebaComponent } from './prueba/prueba.component';
import { PedidosListadoComponent } from './pedidos-listado/pedidos-listado.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    PruebaComponent,
    PedidosListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    ProductoService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
