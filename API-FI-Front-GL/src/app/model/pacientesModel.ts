import { BaseModel } from './baseModel';

export class PacientesModel extends BaseModel {  
  name: string | undefined;  
  idade: number| undefined;
  tipoSanguineo: string | undefined; 
  contato: string | undefined; 
}