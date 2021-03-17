import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    component: PublicPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        redirectTo: '/public/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/public/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PublicRoutingModule {}
