import { UserGL } from "../entity/UserGL"
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"



export const getUsersGab = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(UserGL).find()
return response.json (users)
};


export const getUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).findOneBy(id)
    return response.json (user)
};

export const saveUserGab = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(UserGL).save(request.body)
return response.json(user)
}

export const updateUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserGL).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeUserGab = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserGL).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserGL).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};





