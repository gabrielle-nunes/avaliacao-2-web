import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PacienteComponent } from './components/paciente/paciente.component';
const routes: Routes = [
  {path:"usuarios", component:UsuariosComponent},
  {path:"pacientes", component: PacientesComponent},
  {path:"usuario", component: UsuarioComponent},
  {path:"paciente", component: PacienteComponent},
  {path:"usuario/:id", component: UsuarioComponent},
  {path:"paciente/:id", component: PacienteComponent},
  {path:"usuario/novo", component: UsuarioComponent},
  {path:"paciente/novo", component: PacienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
