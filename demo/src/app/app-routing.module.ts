import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Get Started',
        icon: 'fa fa-home',
        breadcrumb: ' ',
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'router-interceptor',
        loadChildren: 'app/+router-interceptor/router-interceptor.module#RouterInterceptorModule',
        data: {
          title: 'Router Interceptor',
          breadcrumb: 'router interceptor',
          icon: ''
        }
      }, {
        path: 'http-interceptor',
        loadChildren: 'app/+http-interceptor/http-interceptor.module#HttpInterceptorModule',
        data: {
          title: 'Http Interceptor',
          breadcrumb: 'http interceptor',
          icon: ''
        }
      }, {
        path: 'animations',
        loadChildren: 'app/+animations/animations.module#AnimationsModule',
        data: {
          title: 'Animations',
          breadcrumb: 'animations',
          icon: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
