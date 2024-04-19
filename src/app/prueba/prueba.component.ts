import { Component, OnInit } from '@angular/core';

interface Cliente{
  nombre:string
  apellido:string
  edad:number
}

interface Producto{
  nombre:string
  precio:number
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  //clientes:Array<Cliente> = new Array<Cliente>()
  //productos:Array<Producto> = new Array<Producto>()

  constructor() { }

  ngOnInit() {
    /*
     this.clientes.push(
       {
         nombre:'Car',
         apellido:'Ateno',
         edad:39
       },
       {
         nombre:'Gonzalo',
         apellido:'Lara',
         edad:40
       }
     )

    this.productos.push(
       {
         nombre:'Maíz',
         precio:15
       },
       {
         nombre:'Agua',
         precio:20
       }
    )*/
  }

  guardarClientes(){
    
    let clientesAgregar:Array<Cliente> = new Array<Cliente>()
    clientesAgregar.push(
      {
        nombre:'Car',
        apellido:'Ateno',
        edad:39
      },
      {
        nombre:'Gonzalo',
        apellido:'Lara',
        edad:40
      }
    )

    console.log("Clientes: " + JSON.stringify(clientesAgregar))
    localStorage.setItem("clientes",JSON.stringify(clientesAgregar)) //asignacion de clientes en localStorage
  }

  guardarProductos(){
    let productoAgregar:Array<Producto> =  new Array<Producto>()
    productoAgregar.push(
      {
        nombre:'Maíz',
        precio:15
      },
      {
        nombre:'Agua',
        precio:20
      }
   )
    console.log("Productos: " + JSON.stringify(productoAgregar))
    localStorage.setItem("productos",JSON.stringify(productoAgregar)) //asignacion de productos en localStorage
  }

  eliminarClientes(){
    localStorage.removeItem("clientes")
    console.log("Clientes eliminados")
  }

  eliminarProductos(){
    localStorage.removeItem("productos")
    console.log("Productos eliminados")
  }
/*
  leerTodo(){
    console.log("Leer todo")
    //console.log( JSON.parse(localStorage.getItem("clientes")) )

    this.clientes = JSON.parse(localStorage.getItem("clientes"))
    this.productos = JSON.parse(localStorage.getItem("productos"))
  }*/

  eliminarTodos(){
    localStorage.clear()
  }


  get clientesLocal(): Cliente[]{
    let clientesLocalStorage: Cliente[] = JSON.parse(localStorage.getItem("clientes")) // recuperacion de clientes de Local Storage
    if(clientesLocalStorage == null){
      return new Array<Cliente>()
    }
      return clientesLocalStorage
  }

  get productosLocal(): Producto[]{
    let productosLocalStorage: Producto[] = JSON.parse(localStorage.getItem("productos")) // recuperacion de clientes de Local Storage
    if(productosLocalStorage == null){
      return new Array<Producto>()
    }
      return productosLocalStorage
  }

}
