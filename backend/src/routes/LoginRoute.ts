import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import JWToken from '../config/JWToken';

class LoginRoute {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/login', this.login);
  }

  private login(req: Request, res: Response) {
    // Suponha que você tenha um serviço de autenticação que verifica as credenciais do usuário
    // e retorna o objeto do usuário se a autenticação for bem-sucedida
    const user = { id: 1, username: 'usuario_exemplo' }; // Substitua pelos dados reais do usuário

    if (!user) {
      res.status(401).json({ error: 'Falha na autenticação' });
      return;
    }

    // Criar um token JWT com as informações do usuário
    const token = JWToken.generateToken({ id: user.id, username: user.username });

    // Responder com o token JWT
    res.json({ token });
  }
}

export default new LoginRoute().router;