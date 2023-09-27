
interface Usuario {
    id: number;
    nome: string;
    login: string;
    email: string | null;
    telefone: string;
    tipo: number | null;
    estado: string;
    municipio: string;
}

export default Usuario;
