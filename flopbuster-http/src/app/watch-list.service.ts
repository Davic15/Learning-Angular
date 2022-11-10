import { HttpClient } from "@angular/common/http";
import { isNgTemplate } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WatchListService {
    constructor(private http: HttpClient){}

    getWachtList() {
        return this.http.get('http://localhost:3000/watchlist');
    }

    getWatchListSortedBy(sortedBy: string) {
        return this.http.get(`http://localhost:3000/watchlist?_sort=${sortedBy}`);
    }

    addTowatchList(flop: any) {
        return this.http.post('http://localhost:3000/watchlist',
            {
                title: flop.title,
                onSale: false,
                dateAdded: '2010-08-15',
                price: 2.99
            }
        )
    }

    deleteItem(flop: any) {
        return this.http.delete(`http://localhost:3000/watchlist/${flop.id}`)
    }
}