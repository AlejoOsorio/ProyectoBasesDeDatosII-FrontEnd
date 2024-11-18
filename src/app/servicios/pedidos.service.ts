import { Injectable } from '@angular/core';
import { PedidoDTO } from '../dto/pedido-dto';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: PedidoDTO[];

  constructor() {
    this.pedidos = [];
    this.pedidos.push(
      new PedidoDTO('1', 'Arturo', 'Pendiente'),
      new PedidoDTO('2', 'Mario', 'Enviado'),
      new PedidoDTO('3', 'Juan', 'Cancelado'),
      new PedidoDTO('4', 'Alfonso', 'Pendiente'),
      new PedidoDTO('5', 'Ramno','Pendiente'),
      new PedidoDTO('6', 'Pepe', 'Pendiente'),
      new PedidoDTO('7', 'Nicolas', 'Pendiente')
    );
  }

  public listar(): PedidoDTO[] {
    return this.pedidos;
  }

  public listarPedidosVendedor(idVendedor: string): PedidoDTO[] {
    return this.pedidos.filter( pedido => pedido.id === idVendedor);
  }

  public obtenerPedido(idPedido: string): PedidoDTO | undefined{
    return this.pedidos.find( pedido => pedido.id == idPedido);
  }

  public crearPedido(pedido: PedidoDTO) {
    this.pedidos.push(pedido);
  }
}
