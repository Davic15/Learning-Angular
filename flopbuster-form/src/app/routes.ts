import { LoginComponent } from "./login/login.component"
import { FlopListComponent } from "./flop-list/flop-list.component" 
import { Routes } from "@angular/router"

export const routingTable: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'flops', component: FlopListComponent },
    { path: 'login', component: LoginComponent }
]