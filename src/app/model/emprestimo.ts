import { Turma } from "./turma";
import { Pessoa } from "./pessoa";
import { EmprestimoLivro } from "./emprestimoLivro";
import { StatusEmprestimo } from "./statusEmprestimo";

export class Emprestimo {
    uuid: string;
    turma: Turma = new Turma();
    pessoa: Pessoa = new Pessoa();
    livros: Array<EmprestimoLivro> = [];
    status: StatusEmprestimo;
    observacao: string;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}