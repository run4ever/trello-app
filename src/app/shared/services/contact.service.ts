import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts$ = new BehaviorSubject([]);

  constructor(private http:HttpClient) { }

  getContactsFromApi(){
    this.http.get('http://localhost:1337/contacts')
    .subscribe((response:any) => this.contacts$.next(response));
  }

  postContactToApi(contactObj){
    //let headers = new HttpHeaders({Authorization: 'Bearer '+ localStorage.getItem('token')}) //inutile avec interceptor
    //this.http.post('http://localhost:1337/contacts',contactObj, {headers}) //clé et valeur on meme valeur on pourrait simplifier {headers:headers} en {headers}
    this.http.post('http://localhost:1337/contacts',contactObj) //avec interceptor on n'a plus besoin de headers
    .subscribe( response => console.log(response), err => console.log(err));

  }



  /**
 * On peut gérer l'ajout du token dans les headers de la requête sortante de facon automatisée via les interceptors
 */

 deleteContactInApi(contactId:number){
  this.http.delete('http://localhost:1337/contacts'+contactId);
 }


}
