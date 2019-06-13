

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageCPage } from './page-c.page';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: PageCPage,
    children:[
    {
      path: 'PageB',
      loadChildren: '../page-b/page-b.module#PageBPageModule'
    },
    {
      path: 'PageA',
      loadChildren: '../home/home.module#HomePageModule'
    },
    {
      path: 'forms',
      loadChildren: '../forms/forms.module#FormsPageModule'
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
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [PageCPage]
})
export class PageCPageModule {}
