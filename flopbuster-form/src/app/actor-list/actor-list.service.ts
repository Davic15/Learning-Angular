import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
//import { ActorsModule } from '../actors.module';

@Injectable({
  providedIn: 'root'
})
export class ActorListService { 
    constructor(private http: HttpClient) {}

    getActorList() : Observable<any> {
        return of([
        {"id": 0, "name":"Brendan Fraser","movieTitle":"Dudley Do-Right", "credits":72, "born":"December 3, 1968"},
        {"id": 1, "name":"Arnold Schwarzenegger","movieTitle":"Batman and Robin", "credits":75, "born":"July 30, 1947"},
    
    ])
  }
}