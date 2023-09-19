import { Request, Response } from 'express';
import UsuariosService from '../services/UsuariosService';


class UsuariosController {
    public async createUsuario(req: Request, res: Response) {
        try {
            const {
                nome,
                login,
                senha,
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
            } = req.body;

            const usuario = await UsuariosService.createUsuario(
                nome,
                login,
                senha,
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
            );

            if (usuario) {
                res.status(201).json({ message: `Usuário ${usuario.nome} criado com sucesso` });
            }
        } catch (err) {
            res.status(500).json({ message: `Erro ao cadastrar Usuário: ${err}` });
        }
    };

    public async updateSenhaUsuario(req: Request, res: Response) {
        try {
            const { senha } = req.body;
            const { id } = req.params;

            const numberId = Number(id);

            await UsuariosService.updateSenhaUsuario(numberId, senha);
            res.status(200).json({ message: `Senha alterada com sucesso!` })
        } catch (err) {
            res.status(500).json({ message: `Erro ao alterar a senha: ${err}` })
        }
    }

    public async getAllUsuariosByName(_req: Request, res: Response) {
        try {
            const usuarios = await UsuariosService.getAllUsuariosByName();
            res.status(200).json(usuarios)
        } catch (err) {
            res.status(500).json({ message: `Erro ao trazer usuários: ${err}` })
        }
    }

    public async deleteUsuarioById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const numberId = Number(id);

            await UsuariosService.deleteUsuarioById(numberId);
            res.status(204).json({ message: `Usuario de id ${id}, excluido com sucesso!`})
        } catch (err) {
            res.status(500).json({ message: `Erro ao excluir usuário: ${err}` })
        }
    }

}


export default new UsuariosController();