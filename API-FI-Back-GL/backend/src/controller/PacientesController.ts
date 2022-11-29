import { PacientesGL } from '../entity/PacientesGL';
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"



export const getPacientesGab = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(PacientesGL).find()
return response.json (users)
};

export const getPacienteGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGL).findOneBy(id)
    return response.json (user)
};

export const savePacienteGab = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(PacientesGL).save(request.body)
return response.json(user)
}

export const updatePacienteGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGL).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(PacientesGL).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'Paciente not found!'})
};

export const removePacienteGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(PacientesGL).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(PacientesGL).findOneBy(id)
        return response.json({message: 'Paciente file removed'})
    }
    return response.status(404).json({message: 'Paciente not found!'})
};





