import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacientesModel } from 'src/app/model/pacientesModel';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  model: PacientesModel = new PacientesModel();

  //

  constructor(
    private pacientesSrv: PacientesService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.pacientesSrv.GetById(id);
    this.model = result.data as PacientesModel;
  }

  async save(): Promise<void> {
    const result = await this.pacientesSrv.post(this.model);
    console.log(result)
    if (result.success) {
      this.router.navigateByUrl('/pacientes');
    }
  }
}
