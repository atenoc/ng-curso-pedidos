import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Array<Producto> = new Array<Producto>()

  constructor(public productoService:ProductoService, public pedidoService:PedidoService) { }

  ngOnInit() {
    this.productos =  this.productoService.productosLocalStorage
  }

  
  buscarProductos(nombreBuscar){
    console.log("nombre Buscar: "+ nombreBuscar)

    this.productos = this.productoService.productosLocalStorage.filter(producto=>{
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

  agregar(producto: Producto){
    this.pedidoService.pedido.agregarProducto(producto)
    this.pedidoService.guardarLocalStorage() //guardar en localStorage
    //console.log(this.pedidoService.pedido)
    alert("Producto Agregado")
  }


}
