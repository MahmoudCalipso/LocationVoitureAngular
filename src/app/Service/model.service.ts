import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ModelModule } from '../Models/model/model.module';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all Model in the Database
  getListModel(): Observable<ModelModule[]>{
   return this.http.get<ModelModule[]>(API_PATH + 'Model/All', {responseType: 'json'});
  }
  // to get all Model
  getModels(codeModel: number): Observable<ModelModule[]>{
   return this.http.get<ModelModule[]>(API_PATH + 'Model/' + codeModel , {responseType: 'json'});
  }
  // ADD Model
  addModel(Model: ModelModule): Observable<ModelModule>{
     return this.http.post<ModelModule>(API_PATH + 'Model/create', Model);
  }
  // Edite Model
  editeModel(codeModel: any , Model: any): Observable<ModelModule>{
   return this.http.put<ModelModule>(API_PATH + 'Model/findModelBy/' + codeModel , {responseType: 'json'});
  }
  // delete Model
  deleteModel(codeModel: number): Observable<ModelModule>{
   return this.http.delete<ModelModule>(API_PATH + 'Model/delete/' + codeModel , {responseType: 'json'});
  }
}
