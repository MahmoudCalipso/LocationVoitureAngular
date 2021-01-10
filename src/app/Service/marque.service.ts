import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueModule } from '../Models/marque/marque.module';
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
export class MarqueService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Marque in the Database
  getListMarque(): Observable<MarqueModule[]>{
   return this.http.get<MarqueModule[]>(API_PATH + 'Marque/All', {responseType: 'json'});
  }
  // to get all Marque
  getMarques(codeMarque: number): Observable<MarqueModule[]>{
   return this.http.get<MarqueModule[]>(API_PATH + 'Marque/' + codeMarque , {responseType: 'json'});
  }
  // ADD Marque
  addMarque(Marque: MarqueModule): Observable<MarqueModule>{
     return this.http.post<MarqueModule>(API_PATH + 'Marque/create', Marque);
  }
  // Edite Marque
  editeMarque(codeMarque: any , Marque: any): Observable<MarqueModule>{
   return this.http.put<MarqueModule>(API_PATH + 'Marque/findMarqueBy/' + codeMarque , {responseType: 'json'});
  }
  // delete Marque
  deleteMarque(codeMarque: number): Observable<MarqueModule>{
   return this.http.delete<MarqueModule>(API_PATH + 'Marque/delete/' + codeMarque , {responseType: 'json'});
  }
}
