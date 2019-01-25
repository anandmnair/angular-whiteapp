import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HomeModule} from './routes/home/home.module';
import {NavModule} from './shared/components/nav/nav.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';
import {LoggerTestingModule} from 'ngx-logger';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavModule,
        HomeModule,
        DashboardModule,
        LoggerTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
