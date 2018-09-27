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
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;

    getNomeAutor() : string {
        return this.autor.nome;
    }
}