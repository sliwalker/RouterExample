import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTitleComponent} from './header-title/header-title.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderTitleComponent
  ],
  exports: [HeaderComponent]
})
export class AppHeaderModule {
}
