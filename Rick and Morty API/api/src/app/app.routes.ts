import { Routes } from '@angular/router';
import { Api } from './paginas/api/api';

export const routes: Routes = [
  { 
    path: 'home', 
    component: Api 
},
{path: '', redirectTo: 'home', pathMatch: 'full' }
];
