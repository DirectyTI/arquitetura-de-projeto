import express from 'express';
import { PrismaClient } from '@prisma/client';
import UsuariosRoute from './routes/UsuariosRoute';
import loginRoute from './routes/LoginRoute';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota mãe - você pode definir rotas principais aqui
app.get('/', (_req, res) => {
  res.send('Bem-vindo à API principal!');
});

// Usando a classe de rota de login
app.use('/usuarios', UsuariosRoute)
app.use('/login', loginRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está rodando na porta ${port}`);
});