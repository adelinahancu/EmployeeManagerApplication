import { bootstrapApplication } from '@angular/platform-browser';


import { EmployeeService } from './app/employee.service';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
