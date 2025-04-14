import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoModelo } from '../model/grupo.model';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  private readonly _http = inject(HttpClient);

  getAllGrupos(): Observable<GrupoModelo[]> {
    return this._http.get<GrupoModelo[]>(environment.apiUrl + 'grupo');
  }
}
