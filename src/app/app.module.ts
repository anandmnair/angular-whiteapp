import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routes/routing.module';
import { AppComponent } from './app.component';
import {NavModule} from './shared/components/nav/nav.module';
import {HomeModule} from './routes/home/home.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NavModule,
    HomeModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
