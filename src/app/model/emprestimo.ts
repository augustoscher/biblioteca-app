import { Turma } from "./turma";
import { Pessoa } from "./pessoa";

export class Emprestimo {
    uuid: string;
    turma: Turma = new Turma();
    pessoa: Pessoa = new Pessoa();
    observacao: string;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}