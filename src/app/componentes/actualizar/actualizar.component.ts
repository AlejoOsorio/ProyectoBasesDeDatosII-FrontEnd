import { Component } from '@angular/core';
import { HeaderUsuarioComponent } from "../header-usuario/header-usuario.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule, HeaderUsuarioComponent],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {


  // Simulando datos de pedidos
  orders = [
    { id: 1, client: 'Juan Pérez', total: 200, shippingAddress: 'Calle Ficticia 123, Ciudad', status: 'Pendiente' },
    { id: 2, client: 'María Gómez', total: 150, shippingAddress: 'Avenida Imaginaria 456, Ciudad', status: 'Enviado' },
    { id: 3, client: 'Carlos Ruiz', total: 250, shippingAddress: 'Calle Real 789, Ciudad', status: 'Pendiente' }
  ];

  currentOrder: {
    id: number,
    client: string,
    total: number,
    shippingAddress: string,
    status: string
  } = {
      id: 0,
      client: '',
      total: 0,
      shippingAddress: '',
      status: ''
    };

  view_order = false;
  newStatus = '';

  // Función para mostrar detalles del pedido y la opción de actualizarlo
  public viewOrder(orderId: number) {
    const order = this.orders.find(order => order.id === orderId);
    if (order === undefined) return;
    this.currentOrder = order;
    this.newStatus = order.status;
    if (this.currentOrder) {
    // Mostrar el formulario de actualización
      this.view_order = true;
    }
  }

  // Función para actualizar el estado del pedido
  public updateOrderStatus() {
    if (this.currentOrder) {
      this.currentOrder.status = this.newStatus;
      alert('El estado del pedido ha sido actualizado a: ' + this.currentOrder.status);
      this.view_order = false; // Ocultar formulario
    }
  }

  // Función para volver a la lista de pedidos
  public goBack() {
      this.view_order = false; // Ocultar formulario // Ocultar formulario
  }
}
