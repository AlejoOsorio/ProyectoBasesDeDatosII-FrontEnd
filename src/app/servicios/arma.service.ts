import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArmaDTO } from '../dto/arma-dto';

@Injectable({
  providedIn: 'root'
})
export class ArmaService {

  private pulicoURL = "http://localhost:8082"

  constructor(private http: HttpClient) { }

  public listarArmas(): Observable<ArmaDTO[]> {
    return this.http.get<ArmaDTO[]>(`${this.pulicoURL}/obtener/armas`);
  }
}
