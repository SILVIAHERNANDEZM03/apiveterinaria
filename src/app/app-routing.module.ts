import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    loadChildren: () => import('./pages/persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'pacientes-mascotas',
    loadChildren: () => import('./pages/pacientes-mascotas/pacientes-mascotas.module').then( m => m.PacientesMascotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
