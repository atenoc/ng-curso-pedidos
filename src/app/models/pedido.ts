import { PedidoDetalle } from './pedido-detalle'
import { Producto } from './producto'

export class Pedido{
    pedidoId:number
    clienteId:number
    nombreCliente:string
    total:number
    pedidoDetalle:Array<PedidoDetalle> = new Array<PedidoDetalle>()

    constructor(datos?: Pedido){

        if(datos != null){
            this.pedidoId = datos.pedidoId
            this.clienteId = datos.clienteId
            this.nombreCliente = datos.nombreCliente
            this.total = datos.total
            this.pedidoDetalle = datos.pedidoDetalle
            return
        }
        
        this.pedidoId = this.pedidoId
        this.clienteId = this.clienteId
        this.nombreCliente = this.nombreCliente
        this.total = this.total
        this.pedidoDetalle = this.pedidoDetalle
    }

    agregarProducto(producto: Producto){

        let pedidoDetalle: PedidoDetalle = new PedidoDetalle()
        pedidoDetalle.cantidad = 1
        pedidoDetalle.nombreProducto = producto.nombre
        pedidoDetalle.precio = producto.precio
        pedidoDetalle.productoId = producto.productoId
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio
        
        let productoExiste: number = this.pedidoDetalle.filter(prod=> prod.productoId == producto.productoId).length
        if (productoExiste > 0){

            let posicion: number = this.pedidoDetalle.findIndex(prod=> prod.productoId == producto.productoId)
            this.pedidoDetalle[posicion].cantidad++
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio

        }else{
            this.pedidoDetalle.push(pedidoDetalle)
        }

        this.actualizarTotalPedido();
        
      }

      private actualizarTotalPedido(){
          this.total = 0
          /*for(let producto of this.pedidoDetalle){
              this.total = this.total + producto.total
          }*/
          this.pedidoDetalle.forEach(producto=>{
              this.total = this.total + producto.total
          })
          
      }

      public actualizarCantidades(posicion:number){
        this.pedidoDetalle[posicion]
        .total= this.pedidoDetalle[posicion].cantidad *
                this.pedidoDetalle[posicion].precio
        
        this.actualizarTotalPedido()
      }
}