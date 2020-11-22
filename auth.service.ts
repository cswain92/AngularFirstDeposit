import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email:string, password:string ) {
    return this.http.post<any>('/api/login', {email, password});
        // this is just the HTTP call, 
        // we still need to handle the reception of the token

}
}
