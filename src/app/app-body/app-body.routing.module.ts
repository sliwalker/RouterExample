import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotificationDetailsComponent} from "./notification-details/notification-details.component";

const appBodyRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'notificationDetails',
    component: NotificationDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appBodyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppBodyRoutingModule {
}
