import { Editora } from "./editora";
import { Autor } from "./autor";

export class Livro {
    uuid: string;
    titulo: string;
    subTitulo: string;
    isbn: string;
    editora: Editora = new Editora();
    autor: Autor = new Autor();
    edicao: string;
    descricao: string;
    codigoBarras: string;
    codigoLivre: string;
    qtdExemplares: number;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}