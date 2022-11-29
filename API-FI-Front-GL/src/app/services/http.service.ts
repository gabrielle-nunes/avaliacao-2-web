import { UsuarioModel } from './../model/usuarioModel';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IResultHttp } from '../interfaces/IResultHttp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = "/users/:id";

  constructor(
    private http: HttpClient) {

  }

  private createHeader(header?: HttpHeaders): HttpHeaders {

    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');
    header = header.append('Access-Control-Allow-Origin',"*")

    const token = localStorage.getItem('faind:token');
    if (token) {
      header = header.append('x-token-access', token);
    }

    return header;
  }

  public get(url: string): Promise<IResultHttp> {
    const header = this.createHeader();
    return new Promise(async (resolve) => {
      try {        
        const res = await this.http.get(url, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });        
      } catch (error) {        
        resolve({ success: false, data: {}, error });
      }
    });
  }

  public post(url: string, model: any, headers?: HttpHeaders): Promise<IResultHttp> {
    const header = this.createHeader(headers);
    return new Promise(async (resolve) => {
      try {
       
        const res = await this.http.post(url, model, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });   
      } catch (error) {     
        resolve({ success: false, data: {}, error });
      }
    });
  }

  public delete(url: string): Promise<IResultHttp> {
    const header = this.createHeader();

    return new Promise(async (resolve) => {
      try {        
        const res = await this.http.delete(url, { headers: header }).toPromise();
        resolve({ success: true, data: res, error: undefined });       
      } catch (error) {        
        resolve({ success: false, data: {}, error });
      }
    });
  }

}
