import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UsuarioService {

  private urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = 'http://localhost:3000/';
  }

  public logearse (usuario: string, password: string) {
    const datos = JSON.stringify({ usuario: usuario, password: password });
    return this.http.post(this.urlBase + 'auth', datos, httpOptions);
  }

  public getUsuarios() {
    if (localStorage.getItem('currentUser') !== null) {
      const token = JSON.parse(localStorage.getItem('currentUser'));
      const httpOptions2 = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': token.token
        })
      };
      return this.http.get(this.urlBase + 'usuarios', httpOptions2);
    }
    return this.http.get(this.urlBase + 'usuarios', httpOptions);
  }



}
