import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ContratModule } from '../Models/contrat/contrat.module';
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
export class ContratService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Contrat in the Database
  getListContrat(): Observable<ContratModule[]>{
   return this.http.get<ContratModule[]>(API_PATH + 'Contrat/All', {responseType: 'json'});
  }
  // to get all Contrat
  getContrats(numContrat: number): Observable<ContratModule[]>{
   return this.http.get<ContratModule[]>(API_PATH + 'Contrat/' + numContrat , {responseType: 'json'});
  }
  // ADD Contrat
  addContrat(Contrat: ContratModule): Observable<ContratModule>{
     return this.http.post<ContratModule>(API_PATH + 'Contrat/create', Contrat);
  }
  // Edite Contrat
  editeContrat(numContrat: any , Contrat: any): Observable<ContratModule>{
   return this.http.put<ContratModule>(API_PATH + 'Contrat/findContratBy/' + numContrat , {responseType: 'json'});
  }
  // delete Contrat
  deleteContrat(numContrat: number): Observable<ContratModule>{
   return this.http.delete<ContratModule>(API_PATH + 'Contrat/delete/' + numContrat , {responseType: 'json'});
  }
}
