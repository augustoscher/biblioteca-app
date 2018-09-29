import { Livro } from "./livro";

export class EmprestimoLivro {
    uuid: string;
    livro: Livro = new Livro();
    usuarioEmprestimo: string;
    usuarioDevolucao: string;
    status: string;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}