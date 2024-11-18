import { Injectable } from '@angular/core';
import { ArmaDTO } from '../dto/arma-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ArmaDTO[];

  constructor() {
    this.productos = [];
    this.productos.push(
      new ArmaDTO('AK', '1000'),
      new ArmaDTO('AK-47', '2000'),
      new ArmaDTO('AK-52', '3000'),
      new ArmaDTO('AK-36', '4000'),
      new ArmaDTO('AK-38', '5000'),
    );
  }

  public listar(): ArmaDTO[] {
    return this.productos;
  }

  public obtener(codigo: string): ArmaDTO | undefined {
    return this.productos.find(producto => producto.nombre == codigo);
  }
}
