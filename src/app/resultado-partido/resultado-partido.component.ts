import { Component, Input } from '@angular/core';
import { Partido } from '../model/partido.model';

@Component({
  selector: 'app-resultado-partido',
  imports: [],
  standalone: true,
  templateUrl: './resultado-partido.component.html',
  styleUrl: './resultado-partido.component.css',
})
export class ResultadoPartidoComponent {
  @Input() partido?: Partido;
}
