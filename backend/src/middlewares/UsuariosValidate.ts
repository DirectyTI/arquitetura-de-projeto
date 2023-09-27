import { Request, Response, NextFunction } from 'express';

export class UsuariosValidate {
    static validateCriacaoUsuario(req: Request, res: Response, next: NextFunction) {
        const { nome, login, email, telefone, tipo } = req.body;

        if (!nome || !login || !email || !telefone || !tipo) {
            return res.status(400).json({
                message: 'Nome, Login, Email, Telefone e Tipo são obrigatórios',
            });
        }
        next();
    }

    static validateUpdateSenhaUsuario(req: Request, res: Response, next: NextFunction) {
        const { senha } = req.body;

        if(!senha) {
            return res.status(400).json({
                message: 'A senha de alteração é obrigatória',
            });
        }
        next();
    }

    
}
