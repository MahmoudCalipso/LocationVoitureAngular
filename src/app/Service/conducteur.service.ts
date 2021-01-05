import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ConducteurModule } from '../Models/conducteur/conducteur.module';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Conducteur in the Database
  getListConducteur(): Observable<ConducteurModule[]>{
   return this.http.get<ConducteurModule[]>(API_PATH + 'Conducteur/All', {responseType: 'json'});
  }
  // to get all Conducteur
  getConducteurs(codeConducteur: number): Observable<ConducteurModule[]>{
   return this.http.get<ConducteurModule[]>(API_PATH + 'Conducteur/' + codeConducteur , {responseType: 'json'});
  }
  // ADD Conducteur
  addConducteur(Conducteur: ConducteurModule): Observable<ConducteurModule>{
     return this.http.post<ConducteurModule>(API_PATH + 'Conducteur/create', Conducteur);
  }
  // Edite Conducteur
  editeConducteur(codeConducteur: any , Conducteur: any): Observable<ConducteurModule>{
   return this.http.put<ConducteurModule>(API_PATH + 'Conducteur/findConducteurBy/' + codeConducteur , {responseType: 'json'});
  }
  // delete Conducteur
  deleteConducteur(codeConducteur: number): Observable<ConducteurModule>{
   return this.http.delete<ConducteurModule>(API_PATH + 'Conducteur/delete/' + codeConducteur , {responseType: 'json'});
  }
}
