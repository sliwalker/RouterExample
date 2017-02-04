import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import {AppBodyRoutingModule} from "./app-body.routing.module";
import { NotificationDetailsComponent } from './notification-details/notification-details.component';

@NgModule({
  imports: [
    CommonModule,
    AppBodyRoutingModule
  ],
  declarations: [DashboardComponent, NotificationDetailsComponent],
  exports: []
})
export class AppBodyModule {
}
