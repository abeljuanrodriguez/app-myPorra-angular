import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clasificacion } from '../model/clasificacion.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly _http = inject(HttpClient);

  getUsuarios(): Observable<Clasificacion[]> {
    return this._http.get<Clasificacion[]>(
      'https://aplicacionporra-production.up.railway.app/api/resultado'
    );
  }
}
