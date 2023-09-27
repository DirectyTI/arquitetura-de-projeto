import bcrypt from 'bcrypt';
import { Linguagem, Usuarios } from '@prisma/client';
import UsuariosModel from '../models/UsuariosModel';

class UsuariosService {
    public async createUsuario(
        nome: string,
        login: string,
        senha: string,
        email: string,
        telefone: string,
        tipo: number,
        aceitou_termos: boolean,
        localidade: string,
        foto: string,
        estado: string,
        municipio: string,
        familia: string,
        lat: number,
        lon: number,
        linguagem: Linguagem,
    ): Promise<Usuarios | null> {
    
        const hashedSenha = await bcrypt.hash(senha, 10);
    
        const data = {
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
        } as Omit<Usuarios, 'id'>;
    
        try {
            return await UsuariosModel.createUsuario(data);
        } catch (err) {
            console.error('SERVICE - Erro ao criar um novo usuário:', err);
            return null;
        }
    };

    public async updateSenhaUsuario(id: number, senha: string) {
        try {
            const converSenhaString = String(senha);
            const senhaCrypto = await bcrypt.hash(converSenhaString, 10);
            return await UsuariosModel.updateSenhausuario(id, senhaCrypto)
        } catch (err) {
            console.error('SERVICE - Erro ao editar senha do usuário:', err);
            return null;
        }
    }

    public async getAllUsuariosByName() {
        try {
            return await UsuariosModel.getAllUsuariosByName();
        } catch (err) {
            console.error('SERVICE - Erro ao trazer todos usuários:', err);
            return null;
        }
    }

    public async deleteUsuarioById(id: number) {
        try {
            return await UsuariosModel.deleteUsuarioById(id);
        } catch (err) {
            console.error('SERVICE - Erro ao excluir usuário:', err);
        }
    }

}


export default new UsuariosService();