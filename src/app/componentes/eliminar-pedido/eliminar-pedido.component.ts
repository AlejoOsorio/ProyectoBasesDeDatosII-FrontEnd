import { Component } from '@angular/core';
import { HeaderUsuarioComponent } from "../header-usuario/header-usuario.component";
import { PedidosService } from '../../servicios/pedidos.service';
import { PedidoDto } from '../../dto/pedido-dto';

@Component({
  selector: 'app-eliminar-pedido',
  standalone: true,
  imports: [HeaderUsuarioComponent],
  templateUrl: './eliminar-pedido.component.html',
  styleUrl: './eliminar-pedido.component.css'
})
export class EliminarPedidoComponent {

  pedidos: PedidoDto[];
  viewConfirmation: boolean;

  constructor(private pedidosService: PedidosService) {
    this.pedidos = [];
    this.viewConfirmation = false;
    this.listarPedidos();
  }

  public listarPedidos() {
    this.pedidos = this.pedidosService.listarPedidosVendedor('5');
  }

  orderToDelete = '';

  // Función para mostrar el popup de confirmación
  public showConfirmation(idPedido: string) {
    this.orderToDelete = idPedido; // Guardar el ID del pedido a eliminar
    this.viewConfirmation = true;
  }

  // Función para cerrar el popup sin eliminar el pedido
  public closeConfirmation() {
    this.viewConfirmation = false;
    this.orderToDelete = '';
  }

  // Función para eliminar el pedido
  public confirmDelete() {
    // Eliminar el pedido de la lista
    this.pedidos = this.pedidos.filter(pedido => pedido.id !== this.orderToDelete);
    this.viewConfirmation = false; // Cerrar el popup
    alert('El pedido ha sido eliminado correctamente.');
  }
}
