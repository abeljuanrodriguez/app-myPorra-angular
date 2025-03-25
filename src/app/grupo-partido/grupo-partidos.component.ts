import { Component, inject, Input } from '@angular/core';
import { ResultadoPartidoComponent } from '../resultado-partido/resultado-partido.component';
import { GrupoModelo } from '../model/grupo.model';
import { Partido } from '../model/partido.model';
import { PartidoService } from '../services/partido.service';

@Component({
  selector: 'app-grupo-partidos',
  imports: [ResultadoPartidoComponent],
  standalone: true,
  templateUrl: './grupo-partidos.component.html',
  styleUrl: './grupo-partidos.component.css',
})
export class GrupoPartidosComponent {
  @Input() grupo?: GrupoModelo;

  private readonly partidoService;
  partidos!: Partido[];

  constructor() {
    this.partidoService = inject(PartidoService);
  }

  ngOnInit() {
    if (this.grupo) {
      this.partidoService.getPartidosByIdGrupo(this.grupo.id).subscribe({
        next: (respuesta) =>
          (this.partidos = this.partidoService.ordenarPorEquipoLocal(
            respuesta,
            true
          )),
      });
    }
  }
}
