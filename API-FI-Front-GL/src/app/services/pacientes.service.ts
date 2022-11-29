import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpService } from './http.service';
import { PacientesModel } from '../model/pacientesModel';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService extends BaseService<PacientesModel> {

  constructor(public override http: HttpService) {
    super('pacientes', http);
  }

  login(email: string, password: string): Promise<IResultHttp> {
    return this.http.post(`${environment.url_api}/users/auth`, { email, password });
  }
}