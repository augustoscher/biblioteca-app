import { Turma } from "./turma";
import { Pessoa } from "./pessoa";
import { Livro } from "./livro";


export class EmprestimoLivroAluno {
    uuid: string;
    turma: string;
    pessoa: string;
    livro: string;
    createdAt: Date;

    constructor(uuid: string, turma: string, pessoa: string, livro: string, createdAt: Date) {
        this.uuid = uuid;
        this.turma = turma;
        this.pessoa = pessoa;
        this.livro = livro;
        this.createdAt = createdAt;
    }
}