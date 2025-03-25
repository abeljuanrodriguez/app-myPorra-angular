import { Component, computed, Input } from '@angular/core';
import { EnumResultado, Partido } from '../model/partido.model';

@Component({
  selector: 'app-resultado-partido',
  imports: [],
  standalone: true,
  templateUrl: './resultado-partido.component.html',
  styleUrl: './resultado-partido.component.css',
})
export class ResultadoPartidoComponent {
  @Input() partido?: Partido;

  resultClass = computed(() => {
    if (!this.partido?.isJugado) {
      return 'score-input-default';
    }
    switch (this.partido?.resultado) {
      case EnumResultado.ACIERTO_TOTAL:
        return 'score-input-acierto-total';
      case EnumResultado.ACIERTO_PARCIAL:
        return 'score-input-acierto-parcial';
      case EnumResultado.FALLO:
        return 'score-input-fallo';
      default:
        return 'score-input-default';
    }
  });
}
