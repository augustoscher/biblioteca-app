import { EmprestimoUsuario } from "./emprestimosUsuario";

export class Estatistica {
    qtdLivros: Number;
    qtdExemplares: Number;
    qtdEmprestimos: Number;
    emprestimosUsuario: Array<EmprestimoUsuario> = [];
}