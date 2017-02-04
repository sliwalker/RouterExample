import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/body',
    pathMatch: 'full'
  },
  {
    path: 'body',
    loadChildren: './app-body/app-body.module#AppBodyModule'
  },
  {
    path: '**',
    redirectTo: '/body',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
