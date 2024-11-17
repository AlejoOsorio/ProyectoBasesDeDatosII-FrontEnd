import { Injectable } from '@angular/core';
import { PedidoDto } from '../dto/pedido-dto';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos: PedidoDto[];

  constructor() {
    this.pedidos = [];
    this.pedidos.push(
      new PedidoDto('1', 'Arturo'),
      new PedidoDto('2', 'Mario'),
      new PedidoDto('3', 'Juan'),
      new PedidoDto('4', 'Alfonso'),
      new PedidoDto('5', 'Ramno'),
      new PedidoDto('5', 'Pepe'),
      new PedidoDto('5', 'Nicolas')
    );
  }

  public listar(): PedidoDto[] {
    return this.pedidos;
  }

  public listarPedidosVendedor(idVendedor: string): PedidoDto[] {
    return this.pedidos.filter( pedido => pedido.id === idVendedor);
  }

  public obtenerPedido(idPedido: string): PedidoDto | undefined{
    return this.pedidos.find( pedido => pedido.id == idPedido);
  }
}
