import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_base = "https://jsonplaceholder.typicode.com/users/"

  constructor(private _http: HttpClient) { }


  getAll(): Observable<IUsers[]>{
    return this._http.get<IUsers[]>(this.url_base);
  }

  get(): Observable<IUsers>{
    return this._http.get<IUsers>(this.url_base + "1");
  }

}
