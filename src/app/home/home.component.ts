import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { PedidoService } from '../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes: Array<Cliente> = new Array<Cliente>()

  constructor(public clienteService:ClienteService, public pedidoService:PedidoService,
    public router:Router) { }

  ngOnInit() {

    this.clientes = this.clienteService.clientesLocalStorage
  }

  buscarClientes(nombreBuscar){
    console.log("Buscar Cliente: "+ nombreBuscar)

    this.clientes = this.clienteService.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }


  irAproductos(cliente: Cliente){
    this.pedidoService.pedido.clienteId = cliente.clienteId
    this.pedidoService.pedido.nombreCliente = cliente.nombre +' '+ cliente.apellido
    this.pedidoService.guardarLocalStorage() //guardamos en el local storage
    this.router.navigateByUrl('/productos')
    console.log("nombre: "+ this.pedidoService.pedido.nombreCliente)
  }

}
