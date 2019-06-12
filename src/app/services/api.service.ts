import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURI = environment.baseURI;
  addURI = environment.baseURI + environment.addURI;
  constructor(private http:HttpClient) { }

  getHeaders(url) {
    return  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
  post(url, postData) {
    console.log("finale url==>",url);
    return this.http.post(url, postData, this.getHeaders(url));
  }

  get(url) {
    return this.http.get(url, this.getHeaders(url));
  }

  put(url, postData) {
    return this.http.put(url, postData,  this.getHeaders(url));
  }

  // delete(url) {
  //   return this.http.delete(url,  this.getHeaders(url));
  // }

}
