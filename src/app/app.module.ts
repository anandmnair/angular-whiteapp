import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routes/routing.module';
import { AppComponent } from './app.component';
import {NavModule} from './shared/components/nav/nav.module';
import {HomeModule} from './routes/home/home.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';
import {HttpClientModule} from '@angular/common/http';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NavModule,
    HomeModule,
    DashboardModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.INFO })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
