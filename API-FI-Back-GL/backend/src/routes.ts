import { getPacientesGab, getPacienteGab, savePacienteGab, updatePacienteGab, removePacienteGab } from './controller/PacientesController';
import {Router,  Request, Response} from 'express'
import { getUserGab, getUsersGab, saveUserGab, updateUserGab, removeUserGab} from './controller/UserController'

const routes = Router()

routes.get('/users',getUsersGab)
routes.get('/users/:id',getUserGab)
routes.post('/users',saveUserGab)
routes.put('/users/:id',updateUserGab)
routes.delete('/users/:id',removeUserGab)

routes.get('/pacientes',getPacientesGab)
routes.get('/pacientes/:id',getPacienteGab)
routes.post('/pacientes',savePacienteGab)
routes.put('/pacientes/:id',updatePacienteGab)
routes.delete('/pacientes/:id',removePacienteGab)

export default routes