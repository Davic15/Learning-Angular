import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private http: HttpClient){}

    getMovie() {
        return this.http.get('http://localhost:3000/movies')
    }

    updateFlop(flop: any) {
        return this.http.put(`http://localhost:3000/movies/${flop.id}`, flop)
    }
}