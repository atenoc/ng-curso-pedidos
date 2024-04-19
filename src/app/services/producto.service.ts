import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  agregarLocalStorage(producto: Producto){

    let listaProductos: Producto[] = this.productosLocalStorage
    producto.productoId = listaProductos.length + 1
    listaProductos.push(producto)
    localStorage.setItem("productos", JSON.stringify(listaProductos))
  }

  //recuperar el arreglo de productos existentes

  get productosLocalStorage(): Producto[]{
    let productosLocal: Producto[] = JSON.parse(localStorage.getItem("productos"))
    if(productosLocal == null){ 
      return new Array<Producto>() 
    }
    return productosLocal
  }

}
