import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
    constructor(private http: HttpClient) {}

    getWatchList() {
        return this.http.get('http://localhost:3000/watchList')
    }

    deleteItem(item: any) {
        return this.http.delete('http://localhost:3000/watchList/' + item.id)
    }
}