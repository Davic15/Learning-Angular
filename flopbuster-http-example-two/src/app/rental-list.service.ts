import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {

    constructor(private http: HttpClient) {
    }

    addToRentalList(flop: any) {
      flop.id = undefined;
      return this.http
      .post(`http://localhost:3000/rentalList`, flop)
    }

    getRentalList() {
      return this.http.get('http://localhost:3000/rentalList')
    }

    deleteItem(flopId: number) {
      return this.http.delete(`http://localhost:3000/rentalList/${flopId}`)
    }
}