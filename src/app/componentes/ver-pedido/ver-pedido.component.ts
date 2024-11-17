import { Component } from '@angular/core';
import { HeaderUsuarioComponent } from "../header-usuario/header-usuario.component";
import { PedidosService } from '../../servicios/pedidos.service';
import { PedidoDto } from '../../dto/pedido-dto';

@Component({
  selector: 'app-ver-pedido',
  standalone: true,
  imports: [HeaderUsuarioComponent],
  templateUrl: './ver-pedido.component.html',
  styleUrl: './ver-pedido.component.css'
})
export class VerPedidoComponent {

  pedido: PedidoDto;

  constructor(private pedidosService: PedidosService) {
    this.pedido = pedidosService.obtenerPedido('1') || { id: '1', cliente: 'pedro' };
  }

  // Función para volver a la lista de pedidos
  public goBack() {
    window.history.back();  // Esto hace que el navegador regrese a la página anterior (lista de pedidos)
  }
}
