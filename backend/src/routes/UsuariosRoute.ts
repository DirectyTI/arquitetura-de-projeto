import express, { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController';
import { UsuariosValidate } from '../middlewares/UsuariosValidate';

class UsuariosRoute {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/', UsuariosValidate.validateCriacaoUsuario, UsuariosController.createUsuario);
        this.router.put('/:id', UsuariosValidate.validateUpdateSenhaUsuario, UsuariosController.updateSenhaUsuario);
        this.router.get('/', UsuariosController.getAllUsuariosByName);
        this.router.delete('/:id', UsuariosController.deleteUsuarioById);
    }
}

export default new UsuariosRoute().router;
