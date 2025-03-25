import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Clasificacion } from '../model/clasificacion.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css'],
})
export class ClasificacionComponent implements AfterViewInit {
  displayedColumns: string[] = ['alias', 'nombre', 'puntuacion'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private readonly usuarioService = inject(UsuarioService);
  clasificacion: Clasificacion[] = []; // Inicializa el array vacío
  dataSource = new MatTableDataSource<Clasificacion>([]); // Inicializa con un array vacío

  constructor() {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: (respuesta) => {
        this.clasificacion = respuesta;
        this.dataSource.data = this.clasificacion; // Asigna los datos correctamente
      },
      error: (err) => console.error('Error cargando datos:', err),
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Ahora sí el ViewChild está disponible
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
