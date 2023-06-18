import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


baseUrls='http://localhost:8000/api';
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

constructor(  private http:HttpClient) { }

getAllAnnouncements() : Observable<any>{

  return this.http.get(this.baseUrls + '/announcements/', { headers: this.httpHeaders} )
}

}
