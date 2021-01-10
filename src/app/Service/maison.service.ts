import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { MaisonModule } from '../Models/maison/maison.module';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};
@Injectable({
  providedIn: 'root'
})
export class MaisonService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Maison in the Database
  getListMaison(): Observable<MaisonModule[]>{
   return this.http.get<MaisonModule[]>(API_PATH + 'Maison/All', {responseType: 'json'});
  }
  // to get all Maison
  getMaisons(codeMaison: number): Observable<MaisonModule[]>{
   return this.http.get<MaisonModule[]>(API_PATH + 'Maison/' + codeMaison , {responseType: 'json'});
  }
  // ADD Maison
  addMaison(Maison: MaisonModule): Observable<MaisonModule>{
     return this.http.post<MaisonModule>(API_PATH + 'Maison/create', Maison);
  }
  // Edite Maison
  editeMaison(codeMaison: any , Maison: any): Observable<MaisonModule>{
   return this.http.put<MaisonModule>(API_PATH + 'Maison/findMaisonBy/' + codeMaison , {responseType: 'json'});
  }
  // delete Maison
  deleteMaison(codeMaison: number): Observable<MaisonModule>{
   return this.http.delete<MaisonModule>(API_PATH + 'Maison/delete/' + codeMaison , {responseType: 'json'});
  }
}
