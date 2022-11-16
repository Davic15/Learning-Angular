import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { WatchListComponent } from './watch-list/watch-list.component'

let routes: Routes = [
    { path: '', component: WatchListComponent}
]

@NgModule({
  declarations: [
    WatchListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class WatchModule { }
