import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Details } from './Pages/details/details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Family Store - Home' },
  { path: 'details/:id', component: Details, title: 'Family Store - About Product' },
];
