import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    { path: 'search', component: HomeComponent },
    { path: 'history', component: HistoryComponent },
    { path: '',   redirectTo: '/search', pathMatch: 'full' }
];
