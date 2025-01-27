import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url='http://localhost:3000/login';
  constructor(private http:HttpClient) { }
  
 addData(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
 getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}