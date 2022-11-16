import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator.component';


const routes: Routes = [
  { path: '', component: AdministratorComponent }
];

@NgModule({
  declarations: [
    AdministratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministratorModule { }
