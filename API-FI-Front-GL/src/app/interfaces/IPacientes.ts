import { IInterface } from './IInterface';

export interface IPacientes extends IInterface {
  name: string;
  idade: number;
  tipoSanguineo: string;
  contato:string;

}