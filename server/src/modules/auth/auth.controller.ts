import { Request,Response } from 'express'; 
import authServices from './auth.services';
import {RegisterDTO,LoginDTO} from './auth.types';

class AuthController{
    public async register(req: Request, res: Response){
        try{
            const data:RegisterDTO=req.body;
            const result=await authServices.register(data);
            res.status(201).json({
                success:true,
                data:result,
                message:'User registered successfully',
            });
        }catch(error:any){
            res.status(400).json({
                success:false,
                message:error.message || 'Registration failed',
            });
        }   
    }
    public async login(req:Request,res:Response){
        try{
            const data: LoginDTO = req.body;
            const result = await authServices.login(data);
            res.status(200).json({
                success: true,
                data: result,
                message: 'Login successful',
            });
        } catch (error: any) {
            res.status(401).json({
                success: false,
                message: error.message || 'Login failed',
            });
        }
    }
    public async getMe(req:Request,res:Response){
        try{
            const userId=(req as any).user.userId;
            const user=await authServices.getUserById(userId);
            res.status(200).json({
                success:true,
                data:user,
            });
        }catch(error:any){
            res.status(404).json({
                success:false,
                message:error.message || 'User not found',
            });
        }
    }
}

export default new AuthController();