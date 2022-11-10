import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  /* 
  
    http://localhost:3000/logins
    send 2 values: a userid which you can set to anything and a loginDateTime which you can set to now
  
  {
    userId: 3,
    loginDateTime: new Date()
  }
  */

  getCredentials() {
    return this.http.post('http://localhost:3000/logins',
        {
            userId: 1,
            loginDateTime: Date.now()
        }
    )
  }
  

}