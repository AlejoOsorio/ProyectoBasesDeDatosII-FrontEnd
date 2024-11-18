import { Component } from '@angular/core';
import { HeaderUsuarioComponent } from "../header-usuario/header-usuario.component";
import { PedidosService } from '../../servicios/pedidos.service';
import { PedidoDTO } from '../../dto/pedido-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pedido',
  standalone: true,
  imports: [HeaderUsuarioComponent],
  templateUrl: './ver-pedido.component.html',
  styleUrl: './ver-pedido.component.css'
})
export class VerPedidoComponent {

  pedido: PedidoDTO | undefined;
  idPedido: string;

  constructor(private route: ActivatedRoute, private pedidosService: PedidosService) {
    this.idPedido = '';
    this.pedido = new PedidoDTO();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPedido = params["id-pedido"];
      this.buscarPedido(this.idPedido);
    });
  }

  public buscarPedido(idPedido: string) {
    this.pedido = this.pedidosService.obtenerPedido(idPedido);
  }

  // Función para volver a la lista de pedidos
  public goBack() {
    window.history.back();  // Esto hace que el navegador regrese a la página anterior (lista de pedidos)
  }
}
