import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trello-app';
  // constructor(private http: HttpClient) {
    constructor() {

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEyMjE3MDM2LCJleHAiOjE2MTQ4MDkwMzZ9.Bg4290763dcieCnK0JDQ9HD6F-Nq9zEGQIFqzY3N1dU'
    // });

    // this.http.get('http://localhost:1337/articles', { headers }).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // )

  }
}
