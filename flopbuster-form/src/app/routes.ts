import { LoginComponent } from "./login/login.component"
import { FlopListComponent } from "./flop-list/flop-list.component" 
import { ActorListComponent } from "./actor-list/actor-list.component"
import { FlopSuggestionComponent } from "./flop-suggestion/flop-suggestion.component"
import { ReviewsComponent } from "./reviews/reviews.component"
import { Routes } from "@angular/router"

export const routingTable: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'flops', component: FlopListComponent },
    { path: 'actors', component: ActorListComponent },
    { path: 'flops/suggestion', component: FlopSuggestionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reviews', component: ReviewsComponent },
]