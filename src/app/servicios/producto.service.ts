import { Injectable } from '@angular/core';
import { ProductoDto } from '../dto/producto-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoDto[];

  constructor() {
    this.productos = [];
    this.productos.push(
      new ProductoDto('AK', '1000'),
      new ProductoDto('AK-47', '2000'),
      new ProductoDto('AK-52', '3000'),
      new ProductoDto('AK-36', '4000'),
      new ProductoDto('AK-38', '5000'),
    );
  }

  public listar(): ProductoDto[] {
    return this.productos;
  }

  public obtener(codigo: string): ProductoDto | undefined {
    return this.productos.find(producto => producto.nombre == codigo);
  }
}
