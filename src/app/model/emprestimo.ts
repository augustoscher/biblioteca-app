import { Turma } from "./turma";
import { Pessoa } from "./pessoa";
import { EmprestimoLivro } from "./emprestimoLivro";

export class Emprestimo {
    uuid: string;
    turma: Turma = new Turma();
    pessoa: Pessoa = new Pessoa();
    livros: Array<EmprestimoLivro> = [];
    observacao: string;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}