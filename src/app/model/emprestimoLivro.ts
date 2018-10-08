import { Livro } from "./livro";
import { StatusEmprestimo } from "./statusEmprestimo";

export class EmprestimoLivro {
    uuid: string;
    livro: Livro = new Livro();
    usuarioEmprestimo: string;
    usuarioDevolucao: string;
    status: StatusEmprestimo;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}