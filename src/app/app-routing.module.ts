import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapopComponent } from './mapop/mapop.component';
import { SubjectComponent } from './subject/subject.component';
import SharereplayComponent from './sharereplay/sharereplay.component';
import { MergeconcatComponent } from './mergeconcat/mergeconcat.component';

const routes: Routes = [
  { path: 'map', component: MapopComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'sp', component: SharereplayComponent },
  { path: 'merge', component: MergeconcatComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule) }, { path: 'combobox', loadChildren: () => import('./combobox/combobox.module').then(m => m.ComboboxModule) },
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule1) },
  { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
  { path: 'input', loadChildren: () => import('./input/input.module').then(m => m.InputModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule1) },
  { path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
