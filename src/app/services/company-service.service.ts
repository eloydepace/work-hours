import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, CompanyCreate } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private apiUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  signIn(company: CompanyCreate): Observable<any>{
    return this.http.post(`${this.apiUrl}/registerCompany/`, company);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUsers`);
  }

  addUser(user : any){
    return this.http.post(`${this.apiUrl}/addUser`, user);
  }

  getChecksByUser(userId : any){
    return this.http.post(`${this.apiUrl}/getChecksByUser`, userId);
  }

}