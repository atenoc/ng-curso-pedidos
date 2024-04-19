import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  formAgregar:FormGroup
  
  constructor(private fb: FormBuilder, public productoService: ProductoService) { }

  ngOnInit() {
    this.formAgregar = this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  agregar(){
    this.productoService.agregarLocalStorage(this.formAgregar.value)
    this.formAgregar.reset()
  }

}
