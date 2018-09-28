import { TipoPessoa } from './tipoPessoa';

export class Pessoa {
    uuid: string;
    codigo: string;
	nome: string;
    tipo: TipoPessoa;
    userLastUpdate: string;
    createdAt: Date
    updatedAt: Date;
}