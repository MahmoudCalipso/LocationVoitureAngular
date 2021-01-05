import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VoitureModule } from '../Models/voiture/voiture.module';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Voiture in the Database
  getListVoiture(): Observable<VoitureModule[]>{
   return this.http.get<VoitureModule[]>(API_PATH + 'Voiture/All', {responseType: 'json'});
  }
  // to get all Voiture
  getVoitures(idVoiture: number): Observable<VoitureModule[]>{
   return this.http.get<VoitureModule[]>(API_PATH + 'Voiture/' + idVoiture , {responseType: 'json'});
  }
  // ADD Voiture
  addVoiture(Voiture: VoitureModule): Observable<VoitureModule>{
     return this.http.post<VoitureModule>(API_PATH + 'Voiture/create', Voiture);
  }
  // Edite Voiture
  editeVoiture(idVoiture: any , Voiture: any): Observable<VoitureModule>{
   return this.http.put<VoitureModule>(API_PATH + 'Voiture/findVoitureBy/' + idVoiture , {responseType: 'json'});
  }
  // delete Voiture
  deleteVoiture(idVoiture: number): Observable<VoitureModule>{
   return this.http.delete<VoitureModule>(API_PATH + 'Voiture/delete/' + idVoiture , {responseType: 'json'});
  }
}
