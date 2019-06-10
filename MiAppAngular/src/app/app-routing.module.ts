import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs-layout/formulario', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'formulario', loadChildren: './pages/formulario/formulario.module#FormularioPageModule' },
  { path: 'tabs-layout', loadChildren: './pages/tabs-layout/tabs-layout.module#TabsLayoutPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'contacs', loadChildren: './pages/contacs/contacs.module#ContacsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
