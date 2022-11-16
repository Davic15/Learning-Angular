//import { WatchListComponent } from './watch/watch-list/watch-list.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
import { LoginComponent } from './login/login.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { Routes } from '@angular/router'

export const routingTable: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'flops' },  
  { path: 'flops', component: FlopListComponent },
  //{ path: 'actors', component:ActorListComponent },
  //{ path: 'watchlist', component: WatchListComponent },
  
  { path: 'flops/suggestion', component: FlopSuggestionComponent },
  { path: 'flops/:id', component: FlopDetailsComponent },
  { path: 'login', component: LoginComponent },

  { path: 'actors', loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule) },
  { path: 'watchlist', loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule) },

  { path: '**', component: NotFoundComponent },
]