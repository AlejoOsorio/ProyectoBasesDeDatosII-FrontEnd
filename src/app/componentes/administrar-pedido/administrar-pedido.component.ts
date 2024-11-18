import { Component } from '@angular/core';
import { HeaderUsuarioComponent } from "../header-usuario/header-usuario.component";
import { FormsModule } from '@angular/forms';
import { PedidoDTO } from '../../dto/pedido-dto';
import { PedidosService } from '../../servicios/pedidos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule, HeaderUsuarioComponent, RouterModule],
  templateUrl: './administrar-pedido.component.html',
  styleUrl: './administrar-pedido.component.css'
})
export class AdministrarPedidoComponent {

  estadoNuevo: string;
  pedidoAEliminar: string;
  pedidoActual: PedidoDTO | undefined;
  pedidos: PedidoDTO[];
  viewConfirmation: boolean;
  viewPedido: boolean;

  constructor(private router: RouterModule, private pedidoService: PedidosService) {
    this.estadoNuevo = '';
    this.pedidoAEliminar = '';
    this.pedidoActual = undefined;
    this.pedidos = [];
    this.viewConfirmation = false;
    this.viewPedido = false;
    this.listarProductos();
  }

  public listarProductos() {
    this.pedidos = this.pedidoService.listarPedidosVendedor('5');
  }

  // Función para mostrar detalles del pedido y la opción de actualizarlo
  public viewOrder(orderId: string) {
    const order = this.pedidos.find(order => order.id === orderId);
    if (order === undefined) return;
    this.pedidoActual = order;
    this.estadoNuevo = order.status;
    if (this.pedidoActual) {
      // Mostrar el formulario de actualización
      this.viewPedido = true;
    }
  }

  // Función para actualizar el estado del pedido
  public updateOrderStatus() {
    if (this.pedidoActual) {
      this.pedidoActual.status = this.estadoNuevo;
      alert('El estado del pedido ha sido actualizado a: ' + this.pedidoActual.status);
      this.viewPedido = false; // Ocultar formulario
    }
  }

  // Función para volver a la lista de pedidos
  public goBack() {
    this.viewPedido = false; // Ocultar formulario // Ocultar formulario
  }

  // Función para mostrar el popup de confirmación
  public showConfirmation(idPedido: string) {
    this.pedidoAEliminar = idPedido; // Guardar el ID del pedido a eliminar
    this.viewConfirmation = true;
  }

  public closeConfirmation() {
    this.viewConfirmation = false;
    this.pedidoAEliminar = '';
  }

  // Función para eliminar el pedido
  public confirmDelete() {
    // Eliminar el pedido de la lista
    this.pedidos = this.pedidos.filter(pedido => pedido.id !== this.pedidoAEliminar);
    this.viewConfirmation = false; // Cerrar el popup
    alert('El pedido ha sido eliminado correctamente.');
  }
}