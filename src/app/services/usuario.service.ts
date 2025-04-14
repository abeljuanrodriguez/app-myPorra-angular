import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clasificacion } from '../model/clasificacion.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly _http = inject(HttpClient);

  getUsuarios(): Observable<Clasificacion[]> {
    return this._http.get<Clasificacion[]>(environment.apiUrl + 'resultado');
  }
}
