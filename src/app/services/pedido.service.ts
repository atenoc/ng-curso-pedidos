import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Producto } from '../models/producto';
import { PedidoDetalle } from '../models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedido:Pedido = new Pedido()

  constructor() { 
    this.pedido = this.ultimoPedido
  }

  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))
  }

  get ultimoPedido(): Pedido{

    let pedidoLocalStorage: Pedido = new Pedido(JSON.parse (localStorage.getItem("ultimoPedido"))) 

    if(pedidoLocalStorage == null){
      return new Pedido()
    }
    return pedidoLocalStorage;
  }


  guardarPedido(){
    let listadoPedidos: Pedido[] = new Array<Pedido>()
    listadoPedidos = this.listadoPedidosLocalStorage;
    this.pedido.pedidoId = listadoPedidos.length + 1
    listadoPedidos.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))
    //despues de guardar el pedido, remover el ultimo pedido
    localStorage.removeItem("ultimoPedido")
    this.pedido = new Pedido(null) //limpiamos el objeto
  }

  get listadoPedidosLocalStorage(): Pedido[]{

    let pedidos: Pedido[] =  JSON.parse(localStorage.getItem("pedidos"))
    if(pedidos ==null){
      return new Array<Pedido>()
    }
    return pedidos.sort((a,b)=> b.pedidoId - a.pedidoId)
  }

}
