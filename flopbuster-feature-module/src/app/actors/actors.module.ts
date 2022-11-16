import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ActorListComponent } from './actor-list/actor-list.component';

let routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: 'all', component: ActorListComponent},
]

@NgModule({
  declarations: [
    ActorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class ActorsModule { }
