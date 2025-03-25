import { Component, inject } from '@angular/core';
import { GrupoModelo } from '../model/grupo.model';
import { GruposService } from '../services/grupos.service';
import { GrupoPartidosComponent } from '../grupo-partido/grupo-partidos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GrupoPartidosComponent],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css',
})
export class GrupoComponent {
  title = 'app-myPorra-angular';

  // Array de grupos
  private readonly grupoService;
  products!: GrupoModelo[];

  constructor() {
    this.grupoService = inject(GruposService);
  }

  ngOnInit() {
    this.grupoService.getAllGrupos().subscribe({
      next: (respuesta) => (this.products = respuesta),
      error: (error) => console.error('Error obteniendo datos:', error),
    });
  }
}
