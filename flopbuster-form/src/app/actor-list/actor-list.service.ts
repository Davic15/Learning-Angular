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
        {"id": 0, "name":"Brendan Fraser","movieTitle":"Dudley Do-Right", "credits":72, "born":"December 3, 1968", "hasOscar": false, "status": "retired"},
        {"id": 1, "name":"Arnold Schwarzenegger","movieTitle":"Batman and Robin", "credits":75, "born":"July 30, 1947", "hasOscar": true, "status": "active"},
        {"id": 2, "name":"Adam Sandler","movieTitle":"Jack and Jill", "credits":77, "born": "September 9, 1966", "hasOscar": false, "status": "retired"},
        {"id": 3, "name":"Halle Berry","movieTitle":"Catwoman", "credits":57, "born": "August 14, 1966", "hasOscar": false, "status": "retired"},
        {"id": 4, "name":"George Clooney","movieTitle":"Batman and Robin", "credits":92, "born":"May 6, 1961", "hasOscar": true, "status": "passedaway"},
        {"id": 5, "name":"Matthew Lillard","movieTitle":"Wing Commander", "credits":141, "born":"January 24, 1970", "hasOscar": true, "status": "active"}
  
      ])
    }
}