import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {

baseUrl: string = 'https://rickandmortyapi.com/api/character';

 constructor(private http: HttpClient) {}

 obtenerPersonajes() {
   return this.http.get(this.baseUrl);
 }

}