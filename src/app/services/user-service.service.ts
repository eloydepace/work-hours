import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl: string = "http://localhost:3016/api/user";
  private isAdminSubject = new BehaviorSubject<string>('')

  isAdmin = this.isAdminSubject.asObservable()

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any>{
    return this.http.post(`${this.apiUrl}/register/`, user)
  }

  logIn(user: User): Observable<string>{
    return this.http.post<string>(`${this.apiUrl}/login`, user, {responseType: 'json'})
        .pipe(
          tap((res: any) =>{

            this.isAdminSubject.next(res.isAdmin)
          })
        )
  }

  verifyUser(token: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/verify`, token)
  }

}
