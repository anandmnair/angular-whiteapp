import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {RoutingModule} from '../../../routes/routing.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
