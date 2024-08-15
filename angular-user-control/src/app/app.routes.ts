import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginPageComponent },

  // { path: '', component: AppComponent }
];
