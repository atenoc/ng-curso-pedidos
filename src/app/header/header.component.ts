import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //clienteSeleccionado:string

  constructor(public pedidoService:PedidoService) { }

  ngOnInit() {

  }

}
