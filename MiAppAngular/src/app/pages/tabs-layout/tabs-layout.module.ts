import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsLayoutPage } from './tabs-layout.page';

const routes: Routes = [
  {
    path: '',
    component: TabsLayoutPage,
    children:[
    {
      path: 'about',
      loadChildren: '../about/about.module#AboutPageModule'
    },
    {
      path: 'home',
      loadChildren: '../../home/home.module#HomePageModule'
    },
    {
      path: 'formulario',
      loadChildren: '../formulario/formulario.module#FormularioPageModule'
    },
    {
      path: 'sna',
      loadChildren: '../sna/sna.module#SnaPageModule'
    }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsLayoutPage]
})
export class TabsLayoutPageModule {}
