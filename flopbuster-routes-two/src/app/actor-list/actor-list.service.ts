import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorListService {
    constructor(private http: HttpClient) {}

    getActor(id: number) {
        return this.getActorList()
        .pipe(
          map(actors => {
            return actors.filter((actor: any) => actor.id === id)[0]
          })
        )
    }

    getActorList() : Observable<any> {
        return of([
            {"id":0,"name":"Brendan Fraser","movieTitle":"Dudley Do-Right", "credits":72, "born":"December 3, 1968"},
            {"id":1,"name":"Arnold Schwarzenegger","movieTitle":"Batman and Robin", "credits":75, "born":"July 30, 1947"},
            {"id":2,"name":"Adam Sandler","movieTitle":"Jack and Jill", "credits":77, "born": "September 9, 1966"},
            {"id":3,"name":"Halle Berry","movieTitle":"Catwoman", "credits":57, "born": "August 14, 1966"},
            {"id":4,"name":"George Clooney","movieTitle":"Batman and Robin", "credits":92, "born":"May 6, 1961"},
            {"id":5,"name":"Matthew Lillard","movieTitle":"Wing Commander", "credits":141, "born":"January 24, 1970"}
        ])
    }
}