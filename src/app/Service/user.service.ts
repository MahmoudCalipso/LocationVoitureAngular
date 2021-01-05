import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../Models/user/user.module';
const API_PATH = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router  ) { }
  // to get all User in the Database
  getListUser(): Observable<UserModule[]>{
   return this.http.get<UserModule[]>(API_PATH + 'User/All', {responseType: 'json'});
  }
  // to get all User
  getUsers(id: number): Observable<UserModule[]>{
   return this.http.get<UserModule[]>(API_PATH + 'User/' + id , {responseType: 'json'});
  }
  // ADD User
  addUser(User: UserModule): Observable<UserModule>{
     return this.http.post<UserModule>(API_PATH + 'User/create', User);
  }
  // Edite User
  editeUser(id: any , User: any): Observable<UserModule>{
   return this.http.put<UserModule>(API_PATH + 'User/findUserBy/' + id , {responseType: 'json'});
  }
  // delete User
  deleteUser(id: number): Observable<UserModule>{
   return this.http.delete<UserModule>(API_PATH + 'User/delete/' + id , {responseType: 'json'});
  }
}
