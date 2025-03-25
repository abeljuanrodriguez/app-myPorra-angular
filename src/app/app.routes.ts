import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'resultados',
    loadComponent: () =>
      import('./grupo/grupo.component').then((m) => m.GrupoComponent),
  },
  {
    path: 'clasificacion',
    loadComponent: () =>
      import('./clasificacion/clasificacion.component').then(
        (m) => m.ClasificacionComponent
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./perfil/perfil.component').then((m) => m.PerfilComponent),
  },
  { path: '**', redirectTo: '' },
];
