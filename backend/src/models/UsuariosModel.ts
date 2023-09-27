import { PrismaClient, Usuarios } from '@prisma/client';
import Usuario from '../interfaces/usuarioInterface';

const prisma = new PrismaClient();

class UsuariosModel {
    async createUsuario(data: Omit<Usuarios, 'id'>): Promise<Usuarios> {
        const usuario = await prisma.usuarios.create({ data });
        return usuario;
    }

    async updateSenhausuario(id: number, senha: string) {
        try {
            await prisma.usuarios.update({
                where: { id },
                data: { senha },
            });

        } catch (err) {
            console.error(`MODEL - Erro ao atualizar senha do usuário de id = ${id}: ${err}`)
        }
    }

    async getAllUsuariosByName() {
        try {
            return await prisma.usuarios.findMany({
                orderBy: { nome: 'asc' }
            })

        } catch (err) {
            console.error(`MODEL - Erro ao buscar todos os usuarios: ${err}`)
        }
    }

    async deleteUsuarioById(id: number) {
        try {
            return await prisma.usuarios.delete({
                where: {
                    id: id
                }
            })
        } catch (err) {
            console.error(`MODEL - Erro ao excluir usuário: ${err}`)
        }
    }
}

export default new UsuariosModel();
