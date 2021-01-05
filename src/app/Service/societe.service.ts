import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { SocieteModule } from '../Models/societe/societe.module';
import { Observable } from 'rxjs';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Societe in the Database
  getListSociete(): Observable<SocieteModule[]>{
   return this.http.get<SocieteModule[]>(API_PATH + 'Societe/All', {responseType: 'json'});
  }
  // to get all Societe
  getSocietes(numSociete: number): Observable<SocieteModule[]>{
   return this.http.get<SocieteModule[]>(API_PATH + 'Societe/' + numSociete , {responseType: 'json'});
  }
  // ADD Societe
  addSociete(Societe: SocieteModule): Observable<SocieteModule>{
     return this.http.post<SocieteModule>(API_PATH + 'Societe/create', Societe);
  }
  // Edite Societe
  editeSociete(numSociete: any , Societe: any): Observable<SocieteModule>{
   return this.http.put<SocieteModule>(API_PATH + 'Societe/findSocieteBy/' + numSociete , {responseType: 'json'});
  }
  // delete Societe
  deleteSociete(numSociete: number): Observable<SocieteModule>{
   return this.http.delete<SocieteModule>(API_PATH + 'Societe/delete/' + numSociete , {responseType: 'json'});
  }
}
