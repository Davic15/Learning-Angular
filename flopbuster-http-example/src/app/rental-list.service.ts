import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {
    constructor(private http: HttpClient) {}

    getRentalList() {
        return this.http.get('http://localhost:3000/rentalList')
    }
}