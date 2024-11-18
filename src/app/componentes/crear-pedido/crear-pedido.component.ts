import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArmaDTO } from '../../dto/arma-dto';
import { ProductoService } from '../../servicios/producto.service';
import { HeaderUsuarioComponent } from '../header-usuario/header-usuario.component';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../../servicios/pedidos.service';
import { PedidoDTO } from '../../dto/pedido-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderUsuarioComponent],
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.css'
})
export class CrearPedidoComponent {

  productos: ArmaDTO[];
  cart: ArmaDTO[];
  total = 0;
  viewCheckout: boolean;
  showCart: boolean;
  succesMessage: boolean;
  formularioPago: { nombre: string, direccion: string, tarjeta: string };

  constructor(private pedidoService: PedidosService, private productoService: ProductoService) {
    this.productos = [];
    this.cart = [];
    this.viewCheckout = false;
    this.showCart = false;
    this.succesMessage = false;
    this.formularioPago = { nombre: '', direccion: '', tarjeta: '' };
    this.listarProductos();
  }

  public listarProductos() {
    this.productos = this.productoService.listar();
  }


  public addToCart(producto: ArmaDTO) {
    this.cart.push(producto);
    this.total += parseInt(producto.precio);
    this.showModal();
  }

  public removeFromCart(index: number) {
    this.total -= parseInt(this.cart[index].precio);
    this.cart.splice(index, 1);
  }

  public checkout() {
    this.viewCheckout = true;
    this.showCart = false;
  }

  public submitOrder() {

    if (this.formularioPago.nombre && this.formularioPago.direccion && this.formularioPago.tarjeta) {
      // Aquí iría la lógica para procesar el pago y crear el pedido
      this.pedidoService.crearPedido(new PedidoDTO('5', 'Ramon'));
      this.succesMessage = true;
      this.viewCheckout = false;
      this.cart = [];
      this.total = 0;
    }
  }

  showModal() {
    Swal.fire(
      '¡Exito!',
      'Se agrego correctamente al carrito',
      'success'
    );
  }
}
