import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoModelo } from '../model/grupo.model';
import { Partido } from '../model/partido.model';

@Injectable({
  providedIn: 'root',
})
export class PartidoService {
  private readonly _http = inject(HttpClient);

  getPartidosByIdGrupo(id: number): Observable<Partido[]> {
    return this._http.get<Partido[]>(
      'https://aplicacionporra-production.up.railway.app/api/partido/findByIdGrupo/' +
        id +
        '/26'
    );
  }

  ordenarPorEquipoLocal(
    partidos: Partido[],
    ascendente: boolean = true
  ): Partido[] {
    return partidos.sort((a, b) => {
      if (a.nombreEquipo1 < b.nombreEquipo1) {
        return ascendente ? -1 : 1; // Orden ascendente o descendente
      }
      if (a.nombreEquipo1 > b.nombreEquipo1) {
        return ascendente ? 1 : -1; // Orden ascendente o descendente
      }
      return 0; // Si son iguales
    });
  }
}
