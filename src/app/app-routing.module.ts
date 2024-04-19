import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { PedidosListadoComponent } from './pedidos-listado/pedidos-listado.component';


const routes: Routes = [
  {   path:'', component:HomeComponent  },
  {   path:'clientes', component:ClientesComponent  },
  {   path:'agregar-clientes', component:AgregarClientesComponent  },
  {   path:'pedidos', component:PedidosComponent  },
  {   path:'productos', component:ProductosComponent  },
  {   path:'agregar-productos', component:AgregarProductosComponent  },
  {   path:'pedidos-listado', component:PedidosListadoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
