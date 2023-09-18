import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client'; // Importe o PrismaClient
import bcrypt from 'bcrypt';

class UsuariosRoute {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', this.createUsuario);
  }

  private async createUsuario(req: Request, res: Response) {
    const { nome, login, senha, email, telefone, tipo, aceitou_termos, localidade, foto, estado,  municipio, familia, lat, lon, linguagem } = req.body;

    const hashedSenha = await bcrypt.hash(senha, 10);

    const prisma = new PrismaClient();
    try {
      await prisma.usuarios.create({
        data: {
            nome,
            login,
            senha: hashedSenha,
            email,
            telefone,
            tipo,             
            aceitou_termos,   
            localidade,      
            foto,           
            estado,                
            municipio,             
            familia,            
            lat,              
            lon,                  
            linguagem,             
        },
      });
      
      res.status(201).json({ message: `Usuario ${nome} criado com sucesso`});
    } catch (error) {
      console.error('Erro ao criar um novo usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new UsuariosRoute().router;
