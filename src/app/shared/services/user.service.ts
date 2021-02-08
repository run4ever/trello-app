import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}

  login(credentials){
    this.http.post('http://localhost:1337/auth/local',credentials)
   // .subscribe(response => console.log(response), err => console.log(err));
    .subscribe(
      (response: any) => localStorage.setItem('token', response.jwt),
    err => console.log(err));
  }

  logout(){

  }

}
