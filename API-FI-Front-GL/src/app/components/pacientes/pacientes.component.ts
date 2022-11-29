import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IPacientes } from 'src/app/interfaces/IPacientes';
import { PacientesModel } from 'src/app/model/pacientesModel';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  columns: string[] = ['id', 'name', 'idade', 'tipoSanguineo', 'contato'];
  // origem dos dados
  dataSource!: MatTableDataSource<IPacientes>;

  constructor(private pacientesSrv: PacientesService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bind();
  }

  async bind() {
    const pacientes = await this.pacientesSrv.GetAll();
    console.log(pacientes)
    this.dataSource = new MatTableDataSource(pacientes.data);    
  }

  async delete(pacientes: PacientesModel): Promise<void> {
    const result = await this.pacientesSrv.delete(pacientes.id);
    this.bind();     
    this.router.navigateByUrl('/pacientes');      
  }

}
