import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoModelo } from '../model/grupo.model';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  private readonly _http = inject(HttpClient);

  getAllGrupos(): Observable<GrupoModelo[]> {
    return this._http.get<GrupoModelo[]>(
      'https://aplicacionporra-production.up.railway.app/api/grupo'
    );
  }
}
