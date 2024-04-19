import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-pedidos-listado',
  templateUrl: './pedidos-listado.component.html',
  styleUrls: ['./pedidos-listado.component.css']
})
export class PedidosListadoComponent implements OnInit {

  listadoPedidos: Pedido[] = new Array<Pedido>()

  constructor(public pedidoService: PedidoService) { }

  ngOnInit() {
    this.listadoPedidos = this.pedidoService.listadoPedidosLocalStorage
  }

}
