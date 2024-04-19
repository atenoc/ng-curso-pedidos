import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit {

  formAgregar: FormGroup
  cliente:Cliente = new Cliente()

  constructor(private fb: FormBuilder, public clienteService: ClienteService) { }

  ngOnInit() {
    this.formAgregar = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  agregar(){
    this.cliente = this.formAgregar.value as Cliente
    this.clienteService.agregarLocalStorage(this.cliente)
    this.formAgregar.reset()
  }

}
