import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  agregarLocalStorage(cliente: Cliente){

    let listaClientes: Cliente[] = this.clientesLocalStorage
    cliente.clienteId = listaClientes.length + 1
    listaClientes.push(cliente)
    localStorage.setItem("clientes", JSON.stringify(listaClientes))
  }

  //recuperar el arreglo de clientes existentes

  get clientesLocalStorage(): Cliente[]{

    let clientesLocal: Cliente[] = JSON.parse(localStorage.getItem("clientes"))
    if(clientesLocal == null){ 
      return new Array<Cliente>()
    }
    return clientesLocal
  }
}
