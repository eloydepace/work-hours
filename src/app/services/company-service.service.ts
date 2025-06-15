import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, CompanyCreate } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private apiUrl: string = "http://localhost:3016/api/company";

  constructor(private http: HttpClient) {}

  signIn(company: CompanyCreate): Observable<any>{
    return this.http.post(`${this.apiUrl}/registerCompany/`, company)
  }

}