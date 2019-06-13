import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


  constructor(private http : HttpClient) { }

  public  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public getAll(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  public getMenuOpciones(){
    return this.http.get('../assets/menu.json');
  }
}
